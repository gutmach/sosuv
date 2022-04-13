/* I've found it a pain that LIR doesn't make it easy to visit all the URLs under the Notifications bell icon. Do these 2 one-time steps FIRST:
a) To omit downloading irrelevant links mixed in, install the LinkKlipper chrome extension
(https://chrome.google.com/webstore/detail/link-klipper-extract-all/fahollcgofmpnehocdgofnhkkchiekoo?hl=en), select it and enter this regex exactly under settings in LinkKlipper --> Options (yes, I imagine Andre B. has a more efficient regex, but this works)
[.*linkedin.com\/]talent\/redirect|talent\/profile|talent\/hire\/[0-9]+
b) install the Open Multiple URLs chrome extension
https://chrome.google.com/webstore/detail/open-multiple-urls/oifijhaokejakekmnjmphonojcfkpbbh?hl=en

Ongoing usage instructions:
1. Mouseover Notifications bell and mouseover any item in the list of notifications (you can mouseover what seems to be text or a hyperlink), then right click mouse.
2. (Some) of your extensions will load here. Mouse over/select LinkKlipper --> Extract All Links
3. open the .csv file that just got downloaded to your Downloads folder
4. Sort it (first select "My data has headers" checkbox) by Link/column A. All the URLs will be clustered together (starting just below the last row that says "View pipeline in project" and running all the way to the last row of file)
5. Copy just that block of URL values in column A (Ctrl+c)
6. click Open Multiple URLs icon in your chrome extensions bar.
7. Press Paste (Ctrl+v) in the popup it generates
8. Click the gray Open URLs button at lower left of popup. 
9. Watch each of those notification links load in new browser tabs! (Note: this may take a minute if you have more than a dozen notifications. If you need to remind yourself what tab corresponds to who/what notification, look in column B of the csv file you downloaded above.)
I could’ve automated this further with an Excel VBA macro or similar but I wanted a solution that used all off the shelf components and nothing too custom.
*/
