/*


*/

(function ($)
{
    
    $.fn.extend(
        {
            bFontIncrease: function (options)
            {
                //Set the default values, use comma to separate the settings, example:
                var defaults =
                {
                    targetElements: "body p",
                    fontIncreaseMultiplier: 2,
                    lineHeightPercentage: 1.67,
                    activeCSSClass: "bFontActive"
                }

                var options = $.extend(defaults, options);
                var bPrevIdx = { previousIndex: 0 };
                var that = $(this);
                return this.each(                           
                    function (index) {
                        var opt = options;
                        $(this).click(
                            function () {
                                var currentIndex = index;
                                var thatIndex = index;
                                if (bPrevIdx > currentIndex)
                                {
                                    currentIndex = bPrevIdx - currentIndex;
                                    $(defaults.targetElements).each(
                                        function (index) {
                                            var fSizeRaw = $(this).css('fontSize'); 
                                            var fSize = parseInt(fSizeRaw.replace("px", "")) - (currentIndex * opt.fontIncreaseMultiplier) + "px";
                                            $(this).css({ 'font-size': fSize, "line-height": opt.lineHeightPercentage });
                                        }
                                    );
                                }
                                else
                                {
                                    if (bPrevIdx < currentIndex)
                                    {
                                        currentIndex = currentIndex - bPrevIdx;
                                    }
                                    else if (bPrevIdx == currentIndex)
                                    {
                                        currentIndex = 0;
                                    }
                                    $(defaults.targetElements).each(
                                        function (index) {
                                            var fSizeRaw = $(this).css('fontSize');
                                            var fSize = parseInt(fSizeRaw.replace("px", "")) + (currentIndex * opt.fontIncreaseMultiplier) + "px";
                                            $(this).css({ 'font-size': fSize, "line-height": opt.lineHeightPercentage });
                                        }
                                    );
                                }
                                bPrevIdx = index;
                                $(this).addClass(opt.activeCSSClass);
                                        
                                that.each(
                                    function (idx) {
                                        if (idx != thatIndex)
                                        {
                                            if ($(this).hasClass(opt.activeCSSClass))
                                            {
                                                $(this).removeClass(opt.activeCSSClass)
                                            }
                                        }
                                    }
                                );
                            }
                        );
                    }
                );
                   
            }
        }
    );

}
)(jQuery)

