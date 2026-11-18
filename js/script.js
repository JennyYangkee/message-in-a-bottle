/* =====================================================
   MESSAGE IN A BOTTLE
   WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= CHARACTER COUNTER ================= */

const messageText = document.getElementById("messageText");
const charCount = document.getElementById("charCount");

messageText.addEventListener("input", function () {

    charCount.textContent = messageText.value.length;

});


/* ================= SEND MESSAGE ================= */

function sendMessage() {

    const sender = document.getElementById("sender").value.trim();
    const receiver = document.getElementById("receiver").value.trim();
    const message = document.getElementById("messageText").value.trim();

    const sentMessage = document.getElementById("sentMessage");
    const sentText = document.getElementById("sentText");


    /* Check sender */

    if (sender === "") {

        alert("Please enter your name.");

        document.getElementById("sender").focus();

        return;
    }


    /* Check receiver */

    if (receiver === "") {

        alert("Please enter the name of the person you are sending this to.");

        document.getElementById("receiver").focus();

        return;
    }


    /* Check message */

    if (message === "") {

        alert("Please write a message first.");

        document.getElementById("messageText").focus();

        return;
    }


    /* Save message to browser */

    const messageData = {

        sender: sender,

        receiver: receiver,

        message: message,

        date: new Date().toLocaleString()

    };


    localStorage.setItem(
        "lastMessage",
        JSON.stringify(messageData)
    );


    /* Display success */

    sentText.textContent =
        `Your message to ${receiver} has been prepared successfully.`;


    sentMessage.classList.add("show");


    /* Scroll to success message */

    sentMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ================= CLEAR MESSAGE ================= */

function clearMessage() {

    document.getElementById("sender").value = "";

    document.getElementById("receiver").value = "";

    document.getElementById("messageText").value = "";

    document.getElementById("charCount").textContent = "0";

    document.getElementById("sentMessage").classList.remove("show");

}


/* ================= FAQ ================= */

function toggleFAQ(button) {

    const faqItem = button.parentElement;

    const answer = faqItem.querySelector(".faq-answer");


    /* Close other FAQ items */

    document.querySelectorAll(".faq-item").forEach(function(item) {

        if (item !== faqItem) {

            item.classList.remove("active");

            item.querySelector(".faq-answer").style.maxHeight = null;

        }

    });


    /* Open or close selected FAQ */

    faqItem.classList.toggle("active");


    if (faqItem.classList.contains("active")) {

        answer.style.maxHeight = answer.scrollHeight + "px";

    } else {

        answer.style.maxHeight = null;

    }

}


/* ================= NAVIGATION ================= */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelectorAll(".nav-links a").forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* ================= LOAD SAVED MESSAGE ================= */

window.addEventListener("load", function() {

    const savedMessage = localStorage.getItem("lastMessage");

    if (savedMessage) {

        console.log(
            "Previous message found:",
            JSON.parse(savedMessage)
        );

    }

});