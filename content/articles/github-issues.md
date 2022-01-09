---
public: true
slug: github-default-issue-search-doesnt-make-sense
title: Default Github Issue Search Doesn't Make Sense
tags: github
image: /img/github-banner.png
description: The default search filter in github issues should not have `is:open`
---
There are a few reasons for someone searching through github issues:

1. Users using the repo looking for a solution of a problem they're experiencing
2. Users checking existing issues before submitting a new one
3. Developers looking for open tickets to read/tag/close them

Now I don't have any data on this but I'm willing to bet there are many more visits for (1) than they are for (3) but for some reason the default search filter only shows us the open issues which is clearly designed for (3):

`is:issue is:open`

The solution seems obvious to me. If you have PR permissions on a repo, you should get only open issues by default, if not, all issues.