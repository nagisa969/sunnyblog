(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:C:\Users\Administrator\quickstart\themes\jane\assets\js\calendarApp.js
  var require_calendarApp = __commonJS({
    "ns-hugo:C:\\Users\\Administrator\\quickstart\\themes\\jane\\assets\\js\\calendarApp.js"() {
      function CalendarApp2(date) {
        if (!(date instanceof Date)) {
          date = /* @__PURE__ */ new Date();
        }
        this.days = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
        this.months = ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"];
        this.quotes = ["Whatever the mind of man can conceive and believe, it can achieve. \u2013Napoleon Hill", "Strive not to be a success, but rather to be of value. \u2013Albert Einstein", "Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.  \u2013Robert Frost", "I attribute my success to this: I never gave or took any excuse. \u2013Florence Nightingale", "You miss 100% of the shots you don\u2019t take. \u2013Wayne Gretzky", "The most difficult thing is the decision to act, the rest is merely tenacity. \u2013Amelia Earhart", "Every strike brings me closer to the next home run. \u2013Babe Ruth", "Definiteness of purpose is the starting point of all achievement. \u2013W. Clement Stone", "Life isn\u2019t about getting and having, it\u2019s about giving and being. \u2013Kevin Kruse", "Life is what happens to you while you\u2019re busy making other plans. \u2013John Lennon", "We become what we think about. \u2013Earl Nightingale", "Life is 10% what happens to me and 90% of how I react to it. \u2013Charles Swindoll", "The most common way people give up their power is by thinking they don\u2019t have any. \u2013Alice Walker", "The mind is everything. What you think you become.  \u2013Buddha", "Winning isn\u2019t everything, but wanting to win is. \u2013Vince Lombardi", "Every child is an artist.  The problem is how to remain an artist once he grows up. \u2013Pablo Picasso", " You can never cross the ocean until you have the courage to lose sight of the shore. \u2013Christopher Columbus", "I\u2019ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. \u2013Maya Angelou", "Either you run the day, or the day runs you. \u2013Jim Rohn", "Whether you think you can or you think you can\u2019t, you\u2019re right. \u2013Henry Ford", "The two most important days in your life are the day you are born and the day you find out why. \u2013Mark Twain", "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. \u2013Johann Wolfgang von Goethe", "The best revenge is massive success. \u2013Frank Sinatra", "People often say that motivation doesn\u2019t last. Well, neither does bathing.  That\u2019s why we recommend it daily. \u2013Zig Ziglar", "Life shrinks or expands in proportion to one\u2019s courage. \u2013Anais Nin", "If you hear a voice within you say \u201Cyou cannot paint,\u201D then by all means paint and that voice will be silenced. \u2013Vincent Van Gogh", "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. \u2013Aristotle", "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. \u2013Jesus", "The only person you are destined to become is the person you decide to be. \u2013Ralph Waldo Emerson", "Go confidently in the direction of your dreams.  Live the life you have imagined. \u2013Henry David Thoreau", "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.  \u2013Booker T. Washington"];
        this.apts = [
          {
            name: "Finish this web app",
            endTime: new Date(2016, 4, 30, 23),
            startTime: new Date(2016, 4, 30, 21),
            day: new Date(2016, 4, 30).toString()
          },
          {
            name: "My Birthday!",
            endTime: new Date(2016, 4, 1, 23, 59),
            startTime: new Date(2016, 4, 1, 0),
            day: new Date(2016, 4, 1).toString()
          }
        ];
        this.aptDates = [new Date(2016, 4, 30).toString(), new Date(2016, 4, 1).toString()];
        this.eles = {};
        this.calDaySelected = null;
        this.calendar = document.getElementById("calendar-app");
        this.calendarView = document.getElementById("dates");
        this.calendarMonthDiv = document.getElementById("calendar-month");
        this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
        this.calendarMonthNextDiv = document.getElementById("calendar-month-next");
        this.dayInspirationalQuote = document.getElementById("inspirational-quote");
        this.todayIsSpan = document.getElementById("footer-date");
        this.dayViewEle = document.getElementById("day-view");
        this.dayViewExitEle = document.getElementById("day-view-exit");
        this.dayViewDateEle = document.getElementById("day-view-date");
        this.addDayEventEle = document.getElementById("add-event");
        this.dayEventsEle = document.getElementById("day-events");
        this.dayEventAddForm = {
          cancelBtn: document.getElementById("add-event-cancel"),
          addBtn: document.getElementById("add-event-save"),
          nameEvent: document.getElementById("input-add-event-name"),
          startTime: document.getElementById("input-add-event-start-time"),
          endTime: document.getElementById("input-add-event-end-time"),
          startAMPM: document.getElementById("input-add-event-start-ampm"),
          endAMPM: document.getElementById("input-add-event-end-ampm")
        };
        this.dayEventsList = document.getElementById("day-events-list");
        this.dayEventBoxEle = document.getElementById("add-day-event-box");
        this.showView(date);
        this.addEventListeners();
        this.todayIsSpan.textContent = "\u4ECA\u5929\u662F" + this.months[date.getMonth()] + " " + date.getDate() + "\u53F7";
      }
      CalendarApp2.prototype.addEventListeners = function() {
        this.calendar.addEventListener("click", this.mainCalendarClickClose.bind(this));
        this.todayIsSpan.addEventListener("click", this.showView.bind(this));
        this.calendarMonthLastDiv.addEventListener("click", this.showNewMonth.bind(this));
        this.calendarMonthNextDiv.addEventListener("click", this.showNewMonth.bind(this));
        this.dayViewExitEle.addEventListener("click", this.closeDayWindow.bind(this));
        this.dayViewDateEle.addEventListener("click", this.showNewMonth.bind(this));
        this.addDayEventEle.addEventListener("click", this.addNewEventBox.bind(this));
        this.dayEventAddForm.cancelBtn.addEventListener("click", this.closeNewEventBox.bind(this));
        this.dayEventAddForm.cancelBtn.addEventListener("keyup", this.closeNewEventBox.bind(this));
        this.dayEventAddForm.startTime.addEventListener("keyup", this.inputChangeLimiter.bind(this));
        this.dayEventAddForm.startAMPM.addEventListener("keyup", this.inputChangeLimiter.bind(this));
        this.dayEventAddForm.endTime.addEventListener("keyup", this.inputChangeLimiter.bind(this));
        this.dayEventAddForm.endAMPM.addEventListener("keyup", this.inputChangeLimiter.bind(this));
        this.dayEventAddForm.addBtn.addEventListener("click", this.saveAddNewEvent.bind(this));
      };
      CalendarApp2.prototype.showView = function(date) {
        if (!date || !(date instanceof Date))
          date = /* @__PURE__ */ new Date();
        var now = new Date(date), y = now.getFullYear(), m = now.getMonth();
        var today = /* @__PURE__ */ new Date();
        var lastDayOfM = new Date(y, m + 1, 0).getDate();
        var startingD = new Date(y, m, 1).getDay();
        var lastM = new Date(y, now.getMonth() - 1, 1);
        var nextM = new Date(y, now.getMonth() + 1, 1);
        this.calendarMonthDiv.classList.remove("cview__month-activate");
        this.calendarMonthDiv.classList.add("cview__month-reset");
        while (this.calendarView.firstChild) {
          this.calendarView.removeChild(this.calendarView.firstChild);
        }
        for (var x = 0; x < startingD; x++) {
          var spacer = document.createElement("div");
          spacer.className = "cview--spacer";
          this.calendarView.appendChild(spacer);
        }
        for (var z = 1; z <= lastDayOfM; z++) {
          var _date = new Date(y, m, z);
          var day = document.createElement("div");
          day.className = "cview--date";
          day.textContent = z;
          day.setAttribute("data-date", _date);
          day.onclick = this.showDay.bind(this);
          if (z == today.getDate() && y == today.getFullYear() && m == today.getMonth()) {
            day.classList.add("today");
          }
          if (this.aptDates.indexOf(_date.toString()) !== -1) {
            day.classList.add("has-events");
          }
          this.calendarView.appendChild(day);
        }
        var _that = this;
        setTimeout(function() {
          _that.calendarMonthDiv.classList.add("cview__month-activate");
        }, 50);
        this.calendarMonthDiv.textContent = now.getFullYear() + "\u5E74" + this.months[now.getMonth()];
        this.calendarMonthDiv.setAttribute("data-date", now);
        this.calendarMonthLastDiv.textContent = "\u2190 " + this.months[lastM.getMonth()];
        this.calendarMonthLastDiv.setAttribute("data-date", lastM);
        this.calendarMonthNextDiv.textContent = this.months[nextM.getMonth()] + " \u2192";
        this.calendarMonthNextDiv.setAttribute("data-date", nextM);
      };
      CalendarApp2.prototype.showDay = function(e, dayEle) {
        e.stopPropagation();
        if (!dayEle) {
          dayEle = e.currentTarget;
        }
        var dayDate = new Date(dayEle.getAttribute("data-date"));
        this.calDaySelected = dayEle;
        this.openDayWindow(dayDate);
      };
      CalendarApp2.prototype.openDayWindow = function(date) {
        var now = /* @__PURE__ */ new Date();
        var day = new Date(date);
        this.dayViewDateEle.textContent = day.getFullYear() + "\u5E74, " + this.months[day.getMonth()] + " " + day.getDate() + "\u53F7, " + this.days[day.getDay()];
        this.dayViewDateEle.setAttribute("data-date", day);
        this.dayViewEle.classList.add("calendar--day-view-active");
        var _dayTopbarText = "";
        if (day < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
          _dayTopbarText = "had ";
          this.addDayEventEle.style.display = "none";
        } else {
          _dayTopbarText = "have ";
          this.addDayEventEle.style.display = "inline";
        }
        this.addDayEventEle.setAttribute("data-date", day);
        var eventsToday = this.showEventsByDay(day);
        if (!eventsToday) {
          _dayTopbarText += "no ";
          var _rand = Math.round(Math.random() * (this.quotes.length - 1 - 0) + 0);
          this.dayInspirationalQuote.textContent = this.quotes[_rand];
        } else {
          _dayTopbarText += eventsToday.length + " ";
          this.dayInspirationalQuote.textContent = null;
        }
        while (this.dayEventsList.firstChild) {
          this.dayEventsList.removeChild(this.dayEventsList.firstChild);
        }
        this.dayEventsList.appendChild(this.showEventsCreateElesView(eventsToday));
        this.dayEventsEle.textContent = _dayTopbarText + "events on " + day.getFullYear() + "\u5E74, " + this.months[day.getMonth()] + " " + day.getDate() + "\u53F7";
      };
      CalendarApp2.prototype.showEventsCreateElesView = function(events) {
        var ul = document.createElement("ul");
        ul.className = "day-event-list-ul";
        events = this.sortEventsByTime(events);
        var _this = this;
        events.forEach(function(event) {
          var _start = new Date(event.startTime);
          var _end = new Date(event.endTime);
          var idx = event.index;
          var li = document.createElement("li");
          li.className = "event-dates";
          var html = "<span class='start-time'>" + _start.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }) + "</span> <small>through</small> ";
          html += "<span class='end-time'>" + _end.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }) + (_end.getDate() != _start.getDate() ? " <small>on " + _end.toLocaleDateString() + "</small>" : "") + "</span>";
          html += "<span class='event-name'>" + event.name + "</span>";
          var div = document.createElement("div");
          div.className = "event-dates";
          div.innerHTML = html;
          var deleteBtn = document.createElement("span");
          var deleteText = document.createTextNode("delete");
          deleteBtn.className = "event-delete";
          deleteBtn.setAttribute("data-idx", idx);
          deleteBtn.appendChild(deleteText);
          deleteBtn.onclick = _this.deleteEvent.bind(_this);
          div.appendChild(deleteBtn);
          li.appendChild(div);
          ul.appendChild(li);
        });
        return ul;
      };
      CalendarApp2.prototype.deleteEvent = function(e) {
        var deleted = this.apts.splice(e.currentTarget.getAttribute("data-idx"), 1);
        var deletedDate = new Date(deleted[0].day);
        var anyDatesLeft = this.showEventsByDay(deletedDate);
        if (anyDatesLeft === false) {
          var idx = this.aptDates.indexOf(deletedDate.toString());
          if (idx >= 0) {
            this.aptDates.splice(idx, 1);
            var ele = document.querySelector('.cview--date[data-date="' + deletedDate.toString() + '"]');
            if (ele) {
              ele.classList.remove("has-events");
            }
          }
        }
        this.openDayWindow(deletedDate);
        ;
      };
      CalendarApp2.prototype.sortEventsByTime = function(events) {
        if (!events)
          return [];
        return events.sort(function compare(a, b) {
          if (new Date(a.startTime) < new Date(b.startTime)) {
            return -1;
          }
          if (new Date(a.startTime) > new Date(b.startTime)) {
            return 1;
          }
          return 0;
        });
      };
      CalendarApp2.prototype.showEventsByDay = function(day) {
        var _events = [];
        this.apts.forEach(function(apt, idx) {
          if (day.toString() == apt.day.toString()) {
            apt.index = idx;
            _events.push(apt);
          }
        });
        return _events.length ? _events : false;
      };
      CalendarApp2.prototype.closeDayWindow = function() {
        this.dayViewEle.classList.remove("calendar--day-view-active");
        this.closeNewEventBox();
      };
      CalendarApp2.prototype.mainCalendarClickClose = function(e) {
        if (e.currentTarget != e.target) {
          return;
        }
        this.dayViewEle.classList.remove("calendar--day-view-active");
        this.closeNewEventBox();
      };
      CalendarApp2.prototype.addNewEventBox = function(e) {
        var target = e.currentTarget;
        this.dayEventBoxEle.setAttribute("data-active", "true");
        this.dayEventBoxEle.setAttribute("data-date", target.getAttribute("data-date"));
      };
      CalendarApp2.prototype.closeNewEventBox = function(e) {
        if (e && e.keyCode && e.keyCode != 13)
          return false;
        this.dayEventBoxEle.setAttribute("data-active", "false");
        this.resetAddEventBox();
      };
      CalendarApp2.prototype.saveAddNewEvent = function() {
        var saveErrors = this.validateAddEventInput();
        if (!saveErrors) {
          this.addEvent();
        }
      };
      CalendarApp2.prototype.addEvent = function() {
        var name = this.dayEventAddForm.nameEvent.value.trim();
        var dayOfDate = this.dayEventBoxEle.getAttribute("data-date");
        var dateObjectDay = new Date(dayOfDate);
        var cleanDates = this.cleanEventTimeStampDates();
        this.apts.push({
          name,
          day: dateObjectDay,
          startTime: cleanDates[0],
          endTime: cleanDates[1]
        });
        this.closeNewEventBox();
        this.openDayWindow(dayOfDate);
        this.calDaySelected.classList.add("has-events");
        if (this.aptDates.indexOf(dateObjectDay.toString()) === -1) {
          this.aptDates.push(dateObjectDay.toString());
        }
      };
      CalendarApp2.prototype.convertTo23HourTime = function(stringOfTime, AMPM) {
        var mins = stringOfTime.split(":");
        var hours = stringOfTime.trim();
        if (mins[1] && mins[1].trim()) {
          hours = parseInt(mins[0].trim());
          mins = parseInt(mins[1].trim());
        } else {
          hours = parseInt(hours);
          mins = 0;
        }
        hours = AMPM == "am" ? hours == 12 ? 0 : hours : hours <= 11 ? parseInt(hours) + 12 : hours;
        return [hours, mins];
      };
      CalendarApp2.prototype.cleanEventTimeStampDates = function() {
        var startTime = this.dayEventAddForm.startTime.value.trim() || this.dayEventAddForm.startTime.getAttribute("placeholder") || "8";
        var startAMPM = this.dayEventAddForm.startAMPM.value.trim() || this.dayEventAddForm.startAMPM.getAttribute("placeholder") || "am";
        startAMPM = startAMPM == "a" ? startAMPM + "m" : startAMPM;
        var endTime = this.dayEventAddForm.endTime.value.trim() || this.dayEventAddForm.endTime.getAttribute("placeholder") || "9";
        var endAMPM = this.dayEventAddForm.endAMPM.value.trim() || this.dayEventAddForm.endAMPM.getAttribute("placeholder") || "pm";
        endAMPM = endAMPM == "p" ? endAMPM + "m" : endAMPM;
        var date = this.dayEventBoxEle.getAttribute("data-date");
        var startingTimeStamps = this.convertTo23HourTime(startTime, startAMPM);
        var endingTimeStamps = this.convertTo23HourTime(endTime, endAMPM);
        var dateOfEvent = new Date(date);
        var startDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), startingTimeStamps[0], startingTimeStamps[1]);
        var endDate = new Date(dateOfEvent.getFullYear(), dateOfEvent.getMonth(), dateOfEvent.getDate(), endingTimeStamps[0], endingTimeStamps[1]);
        if (startDate > endDate)
          endDate.setDate(endDate.getDate() + 1);
        return [startDate, endDate];
      };
      CalendarApp2.prototype.validateAddEventInput = function() {
        var _errors = false;
        var name = this.dayEventAddForm.nameEvent.value.trim();
        var startTime = this.dayEventAddForm.startTime.value.trim();
        var startAMPM = this.dayEventAddForm.startAMPM.value.trim();
        var endTime = this.dayEventAddForm.endTime.value.trim();
        var endAMPM = this.dayEventAddForm.endAMPM.value.trim();
        if (!name || name == null) {
          _errors = true;
          this.dayEventAddForm.nameEvent.classList.add("add-event-edit--error");
          this.dayEventAddForm.nameEvent.focus();
        } else {
          this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
        }
        return _errors;
      };
      var timeOut = null;
      var activeEle = null;
      CalendarApp2.prototype.inputChangeLimiter = function(ele) {
        if (ele.currentTarget) {
          ele = ele.currentTarget;
        }
        if (timeOut && ele == activeEle) {
          clearTimeout(timeOut);
        }
        var limiter = CalendarApp2.prototype.textOptionLimiter;
        var _options = ele.getAttribute("data-options").split(",");
        var _format = ele.getAttribute("data-format") || "text";
        timeOut = setTimeout(function() {
          ele.value = limiter(_options, ele.value, _format);
        }, 600);
        activeEle = ele;
      };
      CalendarApp2.prototype.textOptionLimiter = function(options, input, format) {
        if (!input)
          return "";
        if (input.indexOf(":") !== -1 && format == "datetime") {
          var _splitTime = input.split(":", 2);
          if (_splitTime.length == 2 && !_splitTime[1].trim())
            return input;
          var _trailingTime = parseInt(_splitTime[1]);
          if (options.indexOf(_splitTime[0]) === -1) {
            return options[0];
          } else if (_splitTime[1] == "0") {
            return input;
          } else if (_splitTime[1] == "00") {
            return _splitTime[0] + ":00";
          } else if (_trailingTime < 10) {
            return _splitTime[0] + ":0" + _trailingTime;
          } else if (!Number.isInteger(_trailingTime) || _trailingTime < 0 || _trailingTime > 59) {
            return _splitTime[0];
          }
          return _splitTime[0] + ":" + _trailingTime;
        }
        if (input.toString().length >= 3) {
          var pad = (input.toString().length - 4) * -1;
          var _hour, _min;
          if (pad == 1) {
            _hour = input[0];
            _min = input[1] + input[2];
          } else {
            _hour = input[0] + input[1];
            _min = input[2] + input[3];
          }
          _hour = Math.max(1, Math.min(12, _hour));
          _min = Math.min(59, _min);
          if (_min < 10) {
            _min = "0" + _min;
          }
          _min = isNaN(_min) ? "00" : _min;
          _hour = isNaN(_hour) ? "9" : _hour;
          return _hour + ":" + _min;
        }
        if (options.indexOf(input) === -1) {
          return options[0];
        }
        return input;
      };
      CalendarApp2.prototype.resetAddEventBox = function() {
        this.dayEventAddForm.nameEvent.value = "";
        this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
        this.dayEventAddForm.endTime.value = "";
        this.dayEventAddForm.startTime.value = "";
        this.dayEventAddForm.endAMPM.value = "";
        this.dayEventAddForm.startAMPM.value = "";
      };
      CalendarApp2.prototype.showNewMonth = function(e) {
        var date = e.currentTarget.dataset.date;
        var newMonthDate = new Date(date);
        this.showView(newMonthDate);
        this.closeDayWindow();
        return true;
      };
      var calendar = new CalendarApp2();
      console.log(calendar);
    }
  });

  // ns-hugo:C:\Users\Administrator\quickstart\themes\jane\assets\js\initMobileNavbar.js
  var initMobileNavbar = () => {
    const $mobileNav = $("#mobile-navbar");
    const $mobileNavIcon = $(".mobile-navbar-icon");
    const slideout = new Slideout({
      "panel": document.getElementById("mobile-panel"),
      "menu": document.getElementById("mobile-menu"),
      "padding": 180,
      "tolerance": 70
    });
    slideout.disableTouch();
    $mobileNavIcon.click(function() {
      slideout.toggle();
    });
    slideout.on("beforeopen", function() {
      $mobileNav.addClass("fixed-open");
      $mobileNavIcon.addClass("icon-click").removeClass("icon-out");
    });
    slideout.on("beforeclose", function() {
      $mobileNav.removeClass("fixed-open");
      $mobileNavIcon.addClass("icon-out").removeClass("icon-click");
    });
    $("#mobile-panel").on("touchend", function() {
      slideout.isOpen() && $mobileNavIcon.click();
    });
    $(".mobile-submenu-open").on("click", function() {
      const $mobileSubmenuList = $(".mobile-submenu-list");
      const $mobileMenuParent = $(".mobile-menu-parent");
      if ($(this).parent().next().css("display") == "none") {
        $mobileSubmenuList.slideUp(300);
        $(this).parent().next("ul").slideDown(300);
        $(this).parent().addClass("mobile-submenu-show");
        $(this).parent().parent().siblings().children().removeClass("mobile-submenu-show");
      } else {
        $(this).parent().next("ul").slideUp(300);
        $mobileMenuParent.removeClass("mobile-submenu-show");
      }
    });
  };
  var initMobileNavbar_default = initMobileNavbar;

  // ns-hugo:C:\Users\Administrator\quickstart\themes\jane\assets\js\initToc.js
  function createTocObserver() {
    const headings = document.querySelectorAll("article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]");
    const setCurrentActive = () => {
      const allActive = document.querySelectorAll(`#TableOfContents .active`);
      if (allActive.length === 0) {
        return;
      } else {
        document.querySelector(`#TableOfContents .current`)?.classList.remove("current");
        document.querySelectorAll(`#TableOfContents .active`)[0]?.classList.add("current");
      }
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.add("active");
        } else {
          document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.remove("active");
        }
        setCurrentActive();
      });
    });
    headings.forEach((section) => {
      observer.observe(section);
    });
  }
  var initToc = () => {
    const tocContainer = document.getElementById("toc");
    if (tocContainer !== null) {
      const toc = document.getElementById("TableOfContents");
      if (toc === null) {
        tocContainer.parentNode.removeChild(tocContainer);
      } else {
        createTocObserver();
      }
    }
  };
  var initToc_default = initToc;

  // ns-hugo:C:\Users\Administrator\quickstart\themes\jane\assets\js\initHeaderAnchor
  var anchorForId = (id) => {
    var anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.href = "#" + id;
    anchor.innerHTML = '<svg viewBox="0 0 16 10" version="1.1" width="24" height="24"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>';
    return anchor;
  };
  var linkifyAnchors = (level, containingElement) => {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h];
      header.className = "post-content-header";
      if (typeof header.id !== "undefined" && header.id !== "") {
        header.appendChild(anchorForId(header.id));
      }
    }
  };
  var initHeaderAnchor = () => {
    var contentBlock = document.getElementsByClassName("post-content")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 4; level++) {
      linkifyAnchors(level, contentBlock);
    }
  };
  var initHeaderAnchor_default = initHeaderAnchor;

  // ns-hugo:C:\Users\Administrator\quickstart\themes\jane\assets\js\initFootnoteTooltip.js
  var initFootnoteTooltip = () => {
    $(".footnote-ref").each(function() {
      var id = $(this).attr("href").substr(1), footnote = $(document.getElementById(id)).clone(), outer_wrapper = $("<span>", { "class": "fn-content" }), inner_wrapper = $("<span>", { "class": "fn-text" });
      footnote.find(".footnote-return").remove();
      $(this).append(outer_wrapper.append(inner_wrapper.html(footnote.html())));
    });
    var position = function() {
      var content = $(".fn-content").removeAttr("style");
      if ($(window).width() < 640)
        content.css("width", $(window).width() / 2);
      else
        content.css("width", 340);
      content.each(function() {
        var width = $(this).children(".fn-text").outerWidth();
        $(this).css({
          "width": width,
          "margin-left": width / -2
        });
      });
    };
    position();
    $(window).resize(position());
  };
  var initFootnoteTooltip_default = initFootnoteTooltip;

  // <stdin>
  var import_calendarApp = __toESM(require_calendarApp());
  $(document).ready(function() {
    initMobileNavbar_default();
    initToc_default();
    initHeaderAnchor_default();
    initFootnoteTooltip_default();
  });
})();
