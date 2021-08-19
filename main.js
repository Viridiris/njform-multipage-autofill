// ==UserScript==
// @name         Nassau Sheriff App Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://nassausheriffcareer.com/
// @icon         https://www.google.com/s2/favicons?domain=nassausheriffcareer.com
// @require http://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function makeid_string(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function makeid_num(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function input_all_fields(dt_string = 'empty datetime') {
    let input_id;
    let label_text
    $( "input[type=text]" ).each(function( index ) {
        input_id = $( this ).attr('id');
        label_text = $("label[for="+ input_id +"]").text();
        $( this ).val(label_text + " " + dt_string)
    });
}


(function() {
    'use strict';
    $( document ).ready(function() {

        var urlString = String(window.location);

        var dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var day = dt.getDate();
        var hour = dt.getHours();
        var minute = dt.getMinutes();

        if (urlString === "https://nassausheriffcareer.com/") {
            if (confirm('----- TAMPER MONKEY SCRIPT -----\n' +
                'Would you like to simulate Application submission? This will automatically fill out the application ' +
                'with filler information and then notify you when complete.')) {
                let application_type = prompt("Please enter L for LEO test, or S for support staff test", "");
                if (application_type == "l") {
                    window.location.href = "https://nassausheriffcareer.com/new-user-registration/?tamper_accttype=l";
                } else if (application_type == "s") {
                    window.location.href = "https://nassausheriffcareer.com/new-user-registration/?tamper_accttype=s";
                } else {
                    alert("input not recognized. Please reload the page to restart script.");
                }
            } else {
                // Do nothing!
            }
        } else if (urlString === "https://nassausheriffcareer.com/new-user-registration/") {
            var acct_type = getUrlVars()["tamper_accttype"];



            $('#first_name').val('Elyk');
            $('#middle_name').val('LEO');
            $('#last_name').val("Test");

            $('#phone_number').val(year + month + day + hour + minute);

            if (acct_type === "l") {
                $("#application_type_Law\\Enforcement/Corrections\\Employment").prop("checked", true);
            } else if (acct_type === "s") {
                $("#application_type_Support\\Staff\\Employment").prop("checked", true);
            }

            let test_account_email = prompt("Enter email used for test account", "");
            let test_account_pass = prompt("Enter password used for test account", "");
            $('#user_email').val(test_account_email);
            $('#user_email').val(test_account_pass);
        } else if (urlString === "https://nassausheriffcareer.com/law-ec-dashboard/") {
            alert("hey 2");
            var datetime_string = String(year) + String(month) + String(day) + String(hour) + String(minute);
            if (confirm('----- TAMPER MONKEY SCRIPT -----\n' +
                'You are about to begin the automated form process\n' +
                'Please strap in and buckle up\n'+
                'Here is your datetime string - [' + datetime_string + ']')) {
                var targetOffset = $('#nf-form-title-18').offset().top;
                $('html, body').animate({scrollTop: targetOffset}, 1000);
                alert("hey");
                var time = 2000;
                var i = 0;
                var li_item_parent;
                while (i < 15) {
                    setTimeout( function() {
                        li_item_parent = $( "ul.nf-breadcrumbs > li.active " ).next();
                        li_item_parent.find("a").click()
                        // $( this ).trigger('click');
                        input_all_fields(datetime_string);
                        time += 2000;
                    });
                    i++;
                }

            } else {
                // Do nothing!
            }
        }
        // var createNewAccount = function($apptype) {
        //
        // };
        // Your code here...
    });
})();
