// form validation

function formValidate() {
    // title
    var title = document.getElementById("title");
    var titleError = true;
    title.addEventListener("keyup", validateTitle);

    function validateTitle() {
        if (title.value == "" || title.value == null) {
            title.classList.add("error");
            title.nextElementSibling.classList.remove("d-none");
        } else {
            titleError = false;
            title.classList.remove("error");
            title.nextElementSibling.classList.add("d-none");
        }
    }
    validateTitle();

    // Start Date
    var startDate = document.getElementById("startDate");
    var startDateError = true;
    startDate.addEventListener("change", validateStartDate);

    function validateStartDate() {
        if (startDate.value == "" || startDate.value == null) {
            startDate.classList.add("error");
            startDate.nextElementSibling.classList.remove("d-none");
        } else {
            startDateError = false;
            startDate.classList.remove("error");
            startDate.nextElementSibling.classList.add("d-none");
        }
    }
    validateStartDate();

    // Start Time
    var startTime = document.getElementById("startTime");
    var startTimeError = true;
    startTime.addEventListener("input", validateStartTime);

    function validateStartTime() {
        if (startTime.value == "" || startTime.value == null) {
            startTime.classList.add("error");
            startTime.nextElementSibling.classList.remove("d-none");
        } else {
            startTimeError = false;
            startTime.classList.remove("error");
            startTime.nextElementSibling.classList.add("d-none");
        }
    }
    validateStartTime();

    // End Date
    var endDate = document.getElementById("endDate");
    var endDateError = true;
    endDate.addEventListener("change", validateEndDate);

    function validateEndDate() {
        if (endDate.value == "" || endDate.value == null) {
            endDate.classList.add("error");
            endDate.nextElementSibling.classList.remove("d-none");
        } else {
            endDateError = false;
            endDate.classList.remove("error");
            endDate.nextElementSibling.classList.add("d-none");
        }
    }
    validateEndDate();

    // End Time
    var endTime = document.getElementById("endTime");
    var endTimeError = true;
    endTime.addEventListener("input", validateEndTime);

    function validateEndTime() {
        if (endTime.value == "" || endTime.value == null) {
            endTime.classList.add("error");
            endTime.nextElementSibling.classList.remove("d-none");
        } else {
            endTimeError = false;
            endTime.classList.remove("error");
            endTime.nextElementSibling.classList.add("d-none");
        }
    }
    validateEndTime();

    // Timezone
    var timezone = document.getElementById("timezone");
    var timezoneError = true;
    timezone.addEventListener("change", validateTimezone);

    function validateTimezone() {
        if (timezone.value == "" || timezone.value == null) {
            timezone.classList.add("error");
            timezone.nextElementSibling.classList.remove("d-none");
        } else {
            timezoneError = false;
            timezone.classList.remove("error");
            timezone.nextElementSibling.classList.add("d-none");
        }
    }
    validateTimezone();

    // Descriptions
    var descriptions = document.getElementById("descriptions");
    var despError = true;
    descriptions.addEventListener("keyup", validateDescriptions);

    function validateDescriptions() {
        if (descriptions.value == "" || descriptions.value == null) {
            descriptions.classList.add("error");
            descriptions.nextElementSibling.classList.remove("d-none");
        } else {
            despError = false;
            descriptions.classList.remove("error");
            descriptions.nextElementSibling.classList.add("d-none");
        }
    }
    validateDescriptions();

    // Check all form fields is there any error
    if ((titleError == false) &&
        (startDateError == false) &&
        (startTimeError == false) &&
        (endDateError == false) &&
        (endTimeError == false) &&
        (timezoneError == false) &&
        (despError == false)
    ) {

        var dataTableRow = `
            <tr>

            <td class="resp-table">` + title.value + `<input type="hidden" name="createdTitle" id="createdTitle" value="` + title.value + `"></td>

            <td class="resp-table">` + startDate.value + ` ` + startTime.value + `<input type="hidden" name="createdStartDateTime" id="createdStartDateTime" value="` + startDate.value + ` ` + startTime.value + `"></td>

            <td class="resp-table">` + endDate.value + ` ` + endTime.value + `<input type="hidden" name="createdEndDateTime" id="createdEndDateTime" value="` + endDate.value + ` ` + endTime.value + `"></td>

            <td class="resp-table">` + timezone.value + `<input type="hidden" name="createdTimezone" id="createdTimezone" value="` + timezone.value + `"></td>

            <td class="resp-table">` + descriptions.value + `<input type="hidden" name="createdDescriptions" id="createdDescriptions" value="` + descriptions.value + `"></td>

            <td class="text-center"><button class="btn add-event-btn remove-event-btn" onclick="return removeEvent(this)"><i class="fa fa-minus"></i></button></td>

            </tr>`;

        document.querySelector("#event-list-form table tbody").innerHTML += dataTableRow;
        document.querySelector(".event-list").classList.remove("d-none");
        document.getElementById("add-event-form").reset();
    }

    return false;

}

// removing event item from event list
function removeEvent(removeBtn) {
    var deleting_title = removeBtn.closest('tr').querySelector('#createdTitle').value;
    if(confirm(`Are you sure?\n\nYou want to remove ${deleting_title} event?`)){
        removeBtn.closest("tr").remove();
        var availEvent = document.querySelector("#event-list-form table tbody").children.length;
        if (availEvent == 0) {
            document.querySelector(".event-list").classList.add("d-none");
        }
        return false;
    } else {
        return false;
    }
}

// Create event 
function createEvent() {
    var availEvent = document.querySelectorAll("#event-list-form table tbody tr");
    var serialNo = 1;
    availEvent.forEach(tableRow => {
        var title = tableRow.querySelector("#createdTitle").value;
        var startDateTime = tableRow.querySelector("#createdStartDateTime").value;
        var endDateTime = tableRow.querySelector("#createdEndDateTime").value;
        var timezone = tableRow.querySelector("#createdTimezone").value;
        var descriptions = tableRow.querySelector("#createdDescriptions").value;

        var dataTableRow = `
        <tr class="border-bottom">

        <td class="resp-table">` + serialNo + `</td>

        <td class="resp-table">` + title + `</td>

        <td class="resp-table">` + startDateTime + `</td>

        <td class="resp-table">` + endDateTime + `</td>

        <td class="resp-table">` + timezone + `</td>

        <td class="resp-table">` + descriptions + `</td>

        </tr>`;

        document.querySelector(".created-event-list tbody").innerHTML += dataTableRow;
        serialNo++;
    });

    setTimeout(() => {
        document.querySelector(".add-event").classList.add("d-none");
        document.querySelector(".event-list").classList.add("d-none");
        document.querySelector(".created-event-list").classList.remove("d-none");
    }, 4000);// if you remove loader then set 4000 to 500 for better experience

    // Loading effect
    setTimeout(function() {
        document.getElementById('staticBackdrop').style.display = "none";
        document.querySelector('#staticBackdrop').classList.remove('show');
        document.querySelector(".modal-backdrop").remove();
        document.querySelector("body").removeAttribute("class");
        document.querySelector("body").removeAttribute("style");
    }, 3000);

    setTimeout(() => {
        document.querySelector(".loader").classList.add("d-none");
        document.querySelector(".successMsg").classList.remove("d-none");
    }, 1000);
}

document.querySelector("#createBtn").addEventListener("click", function(event) {
    event.preventDefault();
    createEvent();
});
