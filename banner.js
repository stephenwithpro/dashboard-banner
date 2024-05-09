<script>
(() => {
  // Add a contact
  const addContact = document.createElement("div");
  addContact.innerHTML = `<div
      class="w-full flex flex-row items-center justify-start px-3 py-2 my-1 hl_quick-actions-item cursor-pointer rounded-md space-x-2 bg-gray-50"
      >
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 bg-do"
        style="stroke: rgb(23, 138, 246); stroke-width: 0.1rem"
      >
        <path
          d="M12.762 5.677V8m0 0v2.323m0-2.323h2.323m-2.323 0h-2.323M8.89 4.128a3.097 3.097 0 11-6.195 0 3.097 3.097 0 016.195 0zM1.147 14.194a4.646 4.646 0 019.292 0v.775H1.147v-.774z"
        ></path>
      </svg>
      <div class="flex flex-col justify-center items-start ml-3">
        <span
          class="hl_quick-actions-title font-medium text-sm hl_quick-action-list-title"
          >Add a Contact</span
        >
        <span class="hl_quick-actions-subtitle font-normal text-xs"
          >Add a new Contact from scratch</span
        >
      </div>
      </div>
      `;

  addContact.addEventListener("click", () => {
    document.querySelector("#quick-add-contact-v2").click();
  });

  // Book an appointment
  const bookAppointment = document.createElement("div");
  bookAppointment.innerHTML = `<div
      class="w-full flex flex-row items-center justify-start px-3 py-2 my-1 hl_quick-actions-item cursor-pointer rounded-md space-x-2 bg-gray-50"
      >
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 bg-do"
        style="stroke: rgb(23, 138, 246); stroke-width: 0.1rem"
      >
        <path
          d="M5.667 4.833V1.5m6.666 3.333V1.5m-7.5 6.667h8.334m-10 8.333h11.666c.92 0 1.667-.746 1.667-1.667v-10c0-.92-.746-1.666-1.667-1.666H3.167c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667z"
        ></path>
      </svg>
      <div class="flex flex-col justify-center items-start ml-3">
        <span
          class="hl_quick-actions-title font-medium text-sm hl_quick-action-list-title"
          >Book an Appointment</span
        ><span class="hl_quick-actions-subtitle font-normal text-xs"
          >Book a new appointment in calendar</span
        >
      </div>
      </div>
      `;

  bookAppointment.addEventListener("click", () => {
    document.querySelector("#quick-create-an-appointment-v2").click();
  });

  // Send a review request
  const sendReviewRequest = document.createElement("div");
  sendReviewRequest.innerHTML = `<div
      class="w-full flex flex-row items-center justify-start px-3 py-2 my-1 hl_quick-actions-item cursor-pointer rounded-md space-x-2 bg-gray-50"
      >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-message-square-code"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="m10 8-2 2 2 2" />
      <path d="m14 8 2 2-2 2" />
    </svg>
    
      <div class="flex flex-col justify-center items-start ml-3">
        <span
          class="hl_quick-actions-title font-medium text-sm hl_quick-action-list-title"
          >Send a Review Request</span
        ><span class="hl_quick-actions-subtitle font-normal text-xs"
          >Send a review request to the customer</span
        >
      </div>
      </div>
      `;

  sendReviewRequest.addEventListener("click", () => {
    document.querySelector("#quick-send-review-v2").click();
  });

  // Create an opportunity
  const createOpportunity = document.createElement("div");
  createOpportunity.innerHTML = `<div
      class="w-full flex flex-row items-center justify-start px-3 py-2 my-1 hl_quick-actions-item cursor-pointer rounded-md space-x-2 bg-gray-50"
      >
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 bg-do"
        style="stroke: rgb(23, 138, 246); stroke-width: 0.1rem"
      >
        <path
          d="M7.468 8.763V8.76a1.684 1.684 0 011.687-1.486h1.89c.863 0 1.6.637 1.74 1.508l.205 1.771a14.61 14.61 0 01-.742.115l-.825.103-.05.83-.293 4.93H9.17l-.293-4.93-.05-.83-.824-.103c-.243-.03-.488-.07-.743-.117l.208-1.788zM11.652 3.03a1.553 1.553 0 11-3.106 0 1.553 1.553 0 013.106 0zM5.135 7.398l-2.822-1 .51-.216c.274-.117.391-.43.274-.686a.516.516 0 00-.686-.274l-1.745.745a.577.577 0 00-.294.314.483.483 0 00.039.43l.863 1.647a.534.534 0 00.294.255.538.538 0 00.647-.765l-.255-.49 2.823 1a.538.538 0 00.686-.313c.098-.235-.06-.55-.334-.647zM4.783 11.214l-2.823 1 .255-.49a.543.543 0 00-.216-.726.556.556 0 00-.431-.04.534.534 0 00-.294.256L.392 12.9a.555.555 0 00-.04.43.576.576 0 00.295.315l1.744.744a.52.52 0 00.686-.274.52.52 0 00-.274-.686l-.51-.216 2.843-1a.538.538 0 00.313-.686c-.078-.274-.392-.411-.666-.313zM15.445 8.407l2.807-.994-.254.487a.54.54 0 00.215.721.552.552 0 00.429.04.532.532 0 00.292-.254l.877-1.677a.553.553 0 00.04-.429.574.574 0 00-.293-.311l-1.735-.741a.517.517 0 00-.682.273.516.516 0 00.273.682l.506.214-2.826.995a.535.535 0 00-.312.682c.078.273.39.41.663.312zM18.934 11.253a.53.53 0 00-.292-.253.535.535 0 00-.643.76l.253.487-2.807-.994a.535.535 0 00-.682.312.535.535 0 00.312.682l2.807.995-.507.214c-.273.117-.39.429-.273.682.117.273.429.39.682.273l1.735-.74a.573.573 0 00.293-.313.48.48 0 00-.04-.428l-.838-1.677z"
        ></path>
      </svg>
      <div class="flex flex-col justify-center items-start ml-3">
        <span
          class="hl_quick-actions-title font-medium text-sm hl_quick-action-list-title"
          >Create an Opportunity</span
        ><span class="hl_quick-actions-subtitle font-normal text-xs"
          >Create new qualified opportunity</span
        >
      </div>
      </div>
      `;

  createOpportunity.addEventListener("click", () => {
    document.querySelector("#quick-create-opportunity-v2").click();
  });

  //Quick actions Pop-up
  const popUp = document.createElement("div");
  popUp.innerHTML = `<div><h4 class="pop-up-heading">Quick Actions</h4></div>`;
  popUp.appendChild(addContact);
  popUp.appendChild(bookAppointment);
  popUp.appendChild(sendReviewRequest);
  popUp.appendChild(createOpportunity);

  popUp.classList.add("pop-up");
  popUp.style.display = "none";

  // New Quick Actions
  const quickActions = document.createElement("div");
  quickActions.innerHTML = `<div class="new-quick-actions"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg></div>`;

  quickActions.classList.add("quick-actions");
  quickActions.addEventListener("click", () => {
    togglePopup();
  });

  function togglePopup() {
    popUp.style.display = popUp.style.display === "none" ? "flex" : "none";
  }

  //   Quick action and popup container
  const quickActionContainer = document.createElement("div");
  quickActionContainer.appendChild(popUp);
  quickActionContainer.appendChild(quickActions);

  // New Search
  const search = document.createElement("div");
  search.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> <span class="global-search-text">Global Search</span>`;
  search.classList.add("global-search");
  search.addEventListener("click", () => {
    document.querySelector("#globalSearchOpener").click();
  });

  //  Search container
  const searchContainer = document.createElement("div");
  searchContainer.appendChild(search);
  searchContainer.classList.add("search-and-quick-actions-container");

  // Welcome container
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("welcome-container");

  window.addEventListener("routeChangeEvent", async (e) => {
    const { name } = e.detail.to;
    const { location_id } = e.detail.to.params;

    if (name === "dashboard-v2") runDashboardCode();

    if (name === "calendars-page-v2") {
      showCalendarUpdate();
    } else {
      hideCalendarUpdate();
    }

    removeProperty();
    if (location_id) runQuickActionCode();
    if (location_id) runSearchCode();
    // addDataset();
  });

  async function runDashboardCode() {
    const selector =
      "#location-dashboard > .hl-wrapper-container > .n-config-provider";
    const dashboard = await getElementByFn(selector);
    if (!dashboard) return;
    if (welcomeContainer.isConnected) return;

    const { name } = app.__vue__.user;
    const currentTime = new Date();
    const hour = currentTime.getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
      greeting = "Good morning";
      emoji = "🌤"; // Sun emoji for morning
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon";
      emoji = "⛅"; // Sun behind clouds emoji for afternoon
    } else {
      greeting = "Good evening";
      emoji = "🌙"; // Crescent moon emoji for evening
    }

    welcomeContainer.innerHTML = `<div>
          <h3>${greeting}, ${name}! ${emoji}</h3>
          <p>Welcome to your command center. Review your progress and plan your next steps efficiently!</p>
        </div>`;
    dashboard.prepend(welcomeContainer);
  }

  async function removeProperty() {
    const helpIconSelector = "#hl_header--help-icon";
    const helpIcon = await getElementByFn(helpIconSelector);

    helpIcon.style.removeProperty("background");
  }

  async function showCalendarUpdate() {
    const calendarUpdatesSelector = "#CalendarsFeatureDiscovery";
    const calendarUpdates = await getElementByFn(calendarUpdatesSelector);

    if (calendarUpdates) {
      calendarUpdates.style.display = "block";
    }
  }

  async function hideCalendarUpdate() {
    const calendarUpdatesSelector = "#CalendarsFeatureDiscovery";
    const calendarUpdates = await getElementByFn(calendarUpdatesSelector);

    if (calendarUpdates) {
      calendarUpdates.style.display = "none";
    }
  }

  async function runSearchCode() {
    const selector = ".container-fluid > .hl_header--controls";
    const header = await getElementByFn(selector);
    if (!header) return;
    if (search.isConnected) return;

    header.prepend(searchContainer);
  }

  async function runQuickActionCode() {
    const quickActionSelector = ".container-fluid > .hl_header--controls";

    const headerControl = await getElementByFn(quickActionSelector);

    if (!headerControl) return;
    if (quickActionContainer.isConnected) return;

    headerControl.prepend(quickActionContainer);
  }

  async function addDataset() {
    // Add data name
    const texts = document.querySelectorAll("text");
    console.log(texts);
    texts.map((textElement) => {
      textElement.dataset.name = textElement.innerHTML;
    });
  }

  //   get element function
  function getElementByFn(selector) {
    let elements = [];
    let intervalId;
    return new Promise((res, rej) => {
      intervalId = setInterval(() => {
        elements = document.querySelectorAll(selector);
        if (!elements.length) return;
        clearInterval(intervalId);
        if (elements.length === 1) return res(elements[0]);
        if (elements.length > 1) return res([...elements]);
      }, 50);

      setTimeout(() => {
        if (!elements.length) {
          clearInterval(intervalId);
          res(false);
          console.log(`${selector} elements not found`);
        }
      }, 20000);
    });
  }
})();
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Select the target element
    const targetElement = document.querySelector('.hl_header--recent-activities.hooked');

    // Create or select the element to append
    const newElement = document.querySelector('.search-and-quick-actions-container');

    if (targetElement && newElement) {
        // Insert the new element after the target element in the DOM
        targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
    }
});
</script>
