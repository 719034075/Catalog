/**
 * Created by 71903 on 2016/10/13.
 */
$(document).ready(function () {
    $('.inactive').on('click', function () {
        const $this = $(this);
        if (!$this.hasClass('inactives')) {
            //$this.parent('li').siblings('li').children('a').removeClass('inactives');
            $this.parent().parent().find('.inactives').parent().children('ul').slideUp(100);
            $this.parent().parent().find('.inactives').removeClass('inactives');
            $this.addClass('inactives');
            $this.siblings('ul').slideDown(100).children('li');
        } else {
            //控制自身变成^号
            $this.removeClass('inactives');
            //控制自身菜单下子菜单隐藏
            $this.siblings('ul').slideUp(100);
        }
    })
});