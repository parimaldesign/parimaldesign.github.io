$(document).ready(function(){

    // Common function for Toggles
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['jquery'], factory);
        } else {
            // Browser globals
            factory(jQuery);
        }
    }) (function($) {
        $.fn.funcToggle = function(type, data) {
            var dname = "jqp_eventtoggle_" + type + (new Date()).getTime(),            
                funcs = Array.prototype.slice.call(arguments, 2),
                numFuncs = funcs.length,
                empty = function() {},
                false_handler = function() {return false;};
    
            if(typeof type === "object") {
                for( var key in type) {
                    $.fn.funcToggle.apply(this, [key].concat(type[key]));
                }
                return this;
            }
            if($.isFunction(data) || data === false) {
                funcs = [data].concat(funcs);
                numFuncs += 1;
                data = undefined;
            }
            
            funcs = $.map(funcs, function(func) {
                if(func === false) {
                    return false_handler;
                }
                if(!$.isFunction(func)) {
                    return empty;
                }
                return func;
            });
    
            this.data(dname, 0);
            this.bind(type, data, function(event) {
                var data = $(this).data(),
                    index = data[dname];
                funcs[index].call(this, event);
                data[dname] = (index + 1) % numFuncs;
            });
            return this;
        };
    });

    // Theme Toggle

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }

    $("#theme_toggle").funcToggle('click',function() {
            trans();
            $("html").attr("data-theme", "dark");
            $("#theme_toggle span").toggleClass("icon-moon icon-sun");
        }
        ,function(){
            trans();
            $("html").attr("data-theme", "light");        
            $("#theme_toggle span").toggleClass("icon-moon icon-sun");
        }
    );

    // Plus-minus buttons Product list
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    // Datepicker
    $('.datepicker').datepicker();

    //Sign up
    $("#toggleSignup").on('click', function(){
        $("#login").addClass('hidden');
        $("#signup").removeClass('hidden');
    });

    //Login
    $("#togglelogin").on('click', function(){
        $("#login").removeClass('hidden');
        $("#signup").addClass('hidden');
    });
});