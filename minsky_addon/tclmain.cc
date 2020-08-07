#include "napi.h"

#include "timer.h"
#include "object.h"
#include "eco_hashmap.h"
#include "pack_stream.h"
#include "tcl++.h"
#include <cairoSurfaceImage.h>
#include <pango.h>

#include <ecolab_epilogue.h>
#include <fstream>

#include <boost/filesystem.hpp>
using boost::filesystem::path;

#include <unistd.h>
#include <fcntl.h>

using namespace std;
using namespace ecolab;
using namespace classdesc;

extern "C"
{
  typedef void (*__sighandler_t) (int);
  extern __sighandler_t signal (int __sig, __sighandler_t __handler);
}

#ifndef SIG_DFL
#define SIG_DFL	((__sighandler_t) 0)		/* Default action.  */
#endif

#define	SIGILL		4	/* Illegal instruction (ANSI).  */

#ifndef SIGABRT
#define	SIGABRT		6	/* Abort (ANSI).  */
#endif

#ifndef SIGBUS
#define	SIGBUS		7	/* BUS error (4.2 BSD).  */
#endif

#ifndef SIGSEGV
#define	SIGSEGV		11	/* Segmentation violation (ANSI).  */
#endif

#include "version.h"
NEWCMD(minsky_version,0)
{
  tclreturn r;
  r<<VERSION;
}

void printTimersAtEnd()
{
  stop_timer("main"); 
  print_timers();
}


Napi::String Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::String::New(env, "world");
}

//TODO - replace fprintfs with logs to console...
Napi::Object init(Napi::Env env, Napi::Object exports) {

  //convert printfs to Napi::Object option type
  Timer timer("main");
  Tcl_FindExecutable(""); //node_minsky.tcl ~= minsky.tcl
  //ecolab::Pango::defaultFamily="Adobe Courier Regular"; //is pango necessary, use browser fonts? Pango fails to link.
  int r = Tcl_Init(interp());
  if (r!=TCL_OK){
    fprintf(stderr,"%s\n",Tcl_GetStringResult(interp()));
    fprintf(stderr,"%s\n",Tcl_GetVar(interp(),"errorInfo",0)); /* print out trace */
    return exports;  /* not a clean execution */
  }

  path minskydir=path(Tcl_GetNameOfExecutable()).parent_path();
  // if Minsky's libraries are not located with the executable, look in the lib
  // directory (unix style installation)
  if (!exists(minskydir/"minsky.tcl"))
    minskydir/="../lib/minsky";
  if (!exists(minskydir/"minsky.tcl"))
    {
      fprintf(stderr,"Minsky library not found!\n");
      return exports;
    }
  tclvar minskyHome("minskyHome",minskydir.string().c_str());

  srand(time(nullptr));

  if (Tcl_EvalFile(interp(), (minskydir/"minsky.tcl").string().c_str())!=TCL_OK)
    {
      fprintf(stderr,"%s\n",Tcl_GetStringResult(interp()));
      fprintf(stderr,"%s\n",Tcl_GetVar(interp(),"errorInfo",0)); /* print out trace */
      return exports;  /* not a clean execution */
    }

  while (true) /* we are running GUI mode */ //TODO:this needs to be a boolean that is set by ipc renderer->main process
    Tcl_DoOneEvent(0); /*Tk_MainLoop();*/   //TODO:no longer a tk loop, use napi objectwrap to map js objects to Items
  Tcl_DeleteInterp(interp());
  Tcl_Finalize();

  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(minsky_addon, init)