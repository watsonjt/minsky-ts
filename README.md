### some hints

* I spent entirely too long trying to use a json-spirit not from minskys repo, undefined symbols. So, if you dont want to get real familiar with binutils, go there.

### What is this project...

Its an attempt to understand the codebase, and work on a electron UI. At some point there 
will be a implementation in rust...

### Graph analysis on minsky source

The dependency graph is in the docs folder (.dot) file.

| Source                  |   Out-Degree-Centrality 2/3 |   In-Degree-Centrality 1/3 |   Weighted Avg |
|-------------------------|-------------------------|------------------------|----------------|
| minsky.h                |               0.252525  |              0.141414  |     0.215492   |
| variable.h              |               0.111111  |              0.121212  |     0.114478   |
| operation.h             |               0.121212  |              0.0808081 |     0.107745   |
| group.h                 |               0.0808081 |              0.10101   |     0.0875414  |
| godleyIcon.h            |               0.0909091 |              0.040404  |     0.0740758  |
| wire.h                  |               0.0808081 |              0.0606061 |     0.0740747  |
| item.h                  |               0.0707071 |              0.0808081 |     0.0740737  |
| minsky_epilogue.h       |               0         |              0.222222  |     0.0740667  |
| canvas.h                |               0.0909091 |              0.030303  |     0.0707091  |
| cairoItems.h            |               0.0606061 |              0.0909091 |     0.0707061  |
| plotWidget.h            |               0.0707071 |              0.030303  |     0.0572404  |
| selection.h             |               0.020202  |              0.121212  |     0.0538687  |
| cairo_base.h            |               0         |              0.121212  |     0.0404     |
| port.h                  |               0.030303  |              0.040404  |     0.0336697  |
| ravelWrap.h             |               0.030303  |              0.040404  |     0.0336697  |
| pango.h                 |               0         |              0.10101   |     0.0336667  |
| parVarSheet.h           |               0.030303  |              0.030303  |     0.030303   |
| SVGItem.h               |               0.030303  |              0.030303  |     0.030303   |
| classdesc_access.h      |               0         |              0.0909091 |     0.0303     |
| godleyTable.h           |               0.030303  |              0.020202  |     0.0269364  |
| godleyTableWindow.h     |               0.030303  |              0.020202  |     0.0269364  |
| switchIcon.h            |               0.020202  |              0.030303  |     0.0235687  |
| cairoSurfaceImage.h     |               0         |              0.0707071 |     0.0235667  |
| panopticon.h            |               0.020202  |              0.020202  |     0.020202   |
| geometry.h              |               0         |              0.0606061 |     0.0202     |
| latexMarkup.h           |               0         |              0.0606061 |     0.0202     |
| CSVDialog.h             |               0.020202  |              0.010101  |     0.0168354  |
| fontDisplay.h           |               0.020202  |              0.010101  |     0.0168354  |
| variableInstanceList.h  |               0.020202  |              0.010101  |     0.0168354  |
| intrusiveMap.h          |               0         |              0.0505051 |     0.0168333  |
| arrays.h                |               0         |              0.0505051 |     0.0168333  |
| sheet.h                 |               0.010101  |              0.020202  |     0.0134677  |
| cairoRenderer.h         |               0.010101  |              0.020202  |     0.0134677  |
| cairo.h                 |               0         |              0.040404  |     0.0134667  |
| ecolab.h                |               0         |              0.040404  |     0.0134667  |
| parameterSheet.h        |               0.010101  |              0.010101  |     0.010101   |
| variableSheet.h         |               0.010101  |              0.010101  |     0.010101   |
| accessor.h              |               0         |              0.030303  |     0.0101     |
| flowCoef.h              |               0         |              0.030303  |     0.0101     |
| bookmark.h              |               0         |              0.030303  |     0.0101     |
| error.h                 |               0         |              0.030303  |     0.0101     |
| TCL_obj_base.h          |               0         |              0.030303  |     0.0101     |
| str.h                   |               0         |              0.030303  |     0.0101     |
| zoom.h                  |               0         |              0.030303  |     0.0101     |
| plot.h                  |               0         |              0.020202  |     0.00673333 |
| variableValue.h         |               0         |              0.020202  |     0.00673333 |
| assetClass.h            |               0         |              0.020202  |     0.00673333 |
| evalGodley.h            |               0         |              0.020202  |     0.00673333 |
| xml_pack_base.h         |               0         |              0.020202  |     0.00673333 |
| polyPackBase.h          |               0         |              0.020202  |     0.00673333 |
| polyBase.h              |               0         |              0.020202  |     0.00673333 |
| dimension.h             |               0         |              0.020202  |     0.00673333 |
| CSVParser.h             |               0         |              0.020202  |     0.00673333 |
| slider.h                |               0         |              0.020202  |     0.00673333 |
| xml_unpack_base.h       |               0         |              0.020202  |     0.00673333 |
| noteBase.h              |               0         |              0.020202  |     0.00673333 |
| minskyTensorOps.h       |               0         |              0.010101  |     0.00336667 |
| integral.h              |               0         |              0.010101  |     0.00336667 |
| extensions.hpp          |               0         |              0.010101  |     0.00336667 |
| pack_base.h             |               0         |              0.010101  |     0.00336667 |
| capiRenderer.h          |               0         |              0.010101  |     0.00336667 |
| schema3.h               |               0         |              0.010101  |     0.00336667 |
| version.h               |               0         |              0.010101  |     0.00336667 |
| variableType.h          |               0         |              0.010101  |     0.00336667 |
| minskyVersion.h         |               0         |              0.010101  |     0.00336667 |
| rsvg.h                  |               0         |              0.010101  |     0.00336667 |
| operationType.h         |               0         |              0.010101  |     0.00336667 |
| function.h              |               0         |              0.010101  |     0.00336667 |
| equations.h             |               0         |              0.010101  |     0.00336667 |
| TCL_obj_stl.h           |               0         |              0.010101  |     0.00336667 |
| https_verification.hpp  |               0         |              0.010101  |     0.00336667 |
| evalOp.h                |               0         |              0.010101  |     0.00336667 |
| ravelState.h            |               0         |              0.010101  |     0.00336667 |
| godleyExport.h          |               0         |              0.010101  |     0.00336667 |
| zStream.h               |               0         |              0.010101  |     0.00336667 |
| rungeKutta.h            |               0         |              0.010101  |     0.00336667 |
| classdesc.h             |               0         |              0.010101  |     0.00336667 |
| timer.h                 |               0         |              0.010101  |     0.00336667 |
