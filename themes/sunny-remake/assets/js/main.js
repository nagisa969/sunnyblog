import initMobileNavbar from './initMobileNavbar';
import initToc from './initToc';
import initHeaderAnchor from './initHeaderAnchor';
import initFootnoteTooltip from './initFootnoteTooltip';
import CalendarApp from './calendarApp';

/* main */
$(document).ready(function () {
  initMobileNavbar();
  initToc();
  initHeaderAnchor();
  initFootnoteTooltip();
});
