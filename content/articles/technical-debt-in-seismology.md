---
public: false
slug: technical-debt-in-seismology
title: The Technical Debt in Seismology
tags: science, seismology, opinion
image: old-computer.jpg
description: Most basic tools in seismology are written in the 90s,
  modernization of these would lower the barrier for multi-disciplenary
  scientists and curious people
---

Seismology is an old science, even the ancient Chinese knew that earth was shaking in specific directions. Up until the 60s, seismology didn't have proper instrumentation. Birth of digital seismometers in the 80s was a major leap forward for the field. Suddenly the scientists were drowning in data. The sudden need for computational resources was driven creation of many of the basic softwares and most of these are still being used today and that is a problem.

<dynamic-image filename="media/articles/code.jpg" ></dynamic-image>

HypoInverse: Written in Fortran,
HypoDD: Fortran
NonLinLoc: C

Possible approaches: 
- compile or transpile old code in a cross-platform language like Java, WASM.
- rewrite them from scratch