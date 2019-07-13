---
title: 'Working with Multiple Bootstrap Modals'
description: The best way that I found to get multiple Bootstrap Modals working within each other on our site, was to write a small script that would close the first modal right before the second modal opens, and then reopen the first modal after the second closes. My full solution is in the post.
date: '2016-01-03'
image: './bootstrap-modals.png'
---

A few weeks ago at my job I was working on a redesign for one of our sites that involved implementing Bootstrap Modals to replace some outdated custom-built dialog boxes. These dialog boxes contained forms for entering credit card and shipping information, and some of the forms would open from within others. This caused some issues when working with Bootstrap's Modals because the first modal would sometimes cut off parts of the form of the second, or the second modal would open underneath the first. After doing some research, I noticed that there aren't a whole lot of resources out there to help solve this issue, so I decided to explain a simple way to solve this problem.

The best way that I found to get multiple Bootstrap Modals working within each other on our site, was to write a small script that would close the first modal right before the second modal opens, and then reopen the first modal after the second closes.

This seemed to work pretty well, but there was another issue that needed to be resolved in this case. The modal that contained the address form could be opened from two different locations. It could be opened by itself to add an address, or it could be opened from within the credit card form if you needed to add a new address for your billing information. If I was to open the address form by itself with the solution above, then the credit card form would automatically open when I closed the address modal, even though I hadn't opened it previously. I needed to find some way to keep track of how the address modal was opened so that the credit card modal would only open when necessary.

Your first thought might be to assign a boolean to a variable within your click handlers in order to keep track of how the form was opened. You could set it to "true" when the second modal is opened from within the first, and then only reopen the first when that variable is "true". However, as soon as the function assigned to the open form click handler completes, that variable will be removed from memory. By the time the click handler for the close button is called, the boolean will no longer be accessible.

A simple way to solve this is to put your boolean variable in the global scope, however you have to be careful here as you don't want to overwrite any variables or have this variable unintentionally overwritten later on. Just be very specific when naming this variable. I named it "within_first_modal" in my example. Once you have your variable set up, be sure to remember to change it back to false as a reset after the address form is closed. You will also want to make sure that all of your close options use that same handler (i.e. close button, x button, overlay).

You can view my example [here](https://codepen.io/joshalling/pen/LBwOBz) at codepen to see exactly how I set up these Bootstrap Modals. If you have thought of another way to solve this problem, feel free to share it in the comments below.
