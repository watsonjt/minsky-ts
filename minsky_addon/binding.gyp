{
    "targets": [
      {
        "target_name": "minsky_addon",
        "sources": [ "tclmain.cc" ],
        "include_dirs" : [
          "<!@(node -p \"require('node-addon-api').include\")",
          "/usr/include/cairo",
          "/usr/include/pango-1.0",
          "/usr/include/pango-1.0/pango",
          "/usr/lib/x86_64-linux-gnu/glib-2.0/include",
          "/usr/include/glib-2.0",
          "minsky/ecolab/include",
          "minsky/ecolab/classdesc",
          "/usr/include/tcl8.6"
        ],
        'defines': [
          'NODE_ADDON',
          'HASH_TCL_hash',
          'HAVE_LONGLONG',
          'GNUSL',
          'ZLIB',
          'XDR_PACK',
          'CONTIGUOUS',
          'BOOST_SIGNALS_NO_DEPRECATION_WARNING',
          'DNDEBUG',
          'PANGO',
          'ECOLAB_LIB=\"./minsky/ecolab/include\"',
        ],
        "libraries": [
          "-lcairo",
          "-lpango-1.0",
          "-lpangocairo-1.0",
          "-lboost_system",
          "-lboost_regex",
          "-lboost_date_time",
          "-lboost_program_options",
          "-lboost_filesystem",
          "-lboost_thread",
          "-lglib-2.0",
          "-ltcl8.6"
        ],
        'cflags!': [ '-fno-exceptions' ],
        'cflags_cc!': [ '-fno-exceptions', '-fno-rtti' ],
        #'cflags_cc':['-dD'],
        'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'CLANG_CXX_LIBRARY': 'libc++',
            'MACOSX_DEPLOYMENT_TARGET': '10.7',
        },
      }
    ],
}