# njform-multipage-autofill
Userscript for autofilling a large Form for testing purposes

I'm using this js file with the tampermonkey plugin on chrome to speed up the testing process for a very large form. It's about 15 pages and has a pretty standard set of input fields. The goal is to automate the account creation process, prompt only for email/password, fill each field of the form, add the datetime code where possible to help identify the test, and then leave the form in a state where I can easily submit. I'm doing all this to bypass the procedure of going through the entire form just to test basic submission or individual fields. 
