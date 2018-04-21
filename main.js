var tags = [
    {
        "tag": "input",
        "type": "text",
        "id": "first-question",
        "name": "first-question",
        "value": "Sure",
        "cf-questions": "Hey nice to meet you! 😊&&I am going to ask a few questions about your sleep&&if that's okay with you?||Let’s have a 3 minute conversation to find a solution that may improve your sleep.",
        "multiple": "multiple",
        "children":[
            {
                "tag": "option",
                "cf-label": "Sure",
                "value": "sure"
            }
        ]
    },

    {
        // select group
        "tag": "fieldset",
        "type": "Checkboxes",
        "name": "improve-what",
        "cf-questions": "Great. How would you like to improve your sleep?",
        "cf-input-placeholder": "Choose above",
        "children":[
            {
                "tag": "input",
                "type": "checkbox",
                "name": "checkboxes-buttons-1",
                "cf-label": "Fall asleep quicker",
                "value": "fall-asleep"
            },

            {
                "tag": "input",
                "type": "checkbox",
                "name": "checkboxes-buttons-1",
                "cf-label": "Wake up earlier",
                "value": "wakeup"
            },

            {
                "tag": "input",
                "type": "checkbox",
                "name": "checkboxes-buttons-1",
                "cf-label": "Sleep through the night without waking up",
                "value": "sleep-consistently"
            }

        ]
    },

    {
        "tag": "fieldset",
        "type": "Checkboxes",
        "name": "blockers",
        "cf-questions": " Which of the following stops you from sleeping most often?",
        "children":[
            {
                "tag": "input",
                "name": "checkboxes-buttons-2",
                "type": "checkbox",
                "cf-label": "Bodily discomfort",
                "value": "bodily-discomfort"
            },

            {
                "tag": "input",
                "name": "checkboxes-buttons-2",
                "type": "checkbox",
                "cf-label": "Snoring",
                "value": "Snoring"
            },

            {
                "tag": "input",
                "name": "checkboxes-buttons-2",
                "type": "checkbox",
                "cf-label": "Stress or Anxiety",
                "value": "Stress or Anxiety"
            }

        ]
    },

    {
        "tag": "fieldset",
        "type": "Radio buttons",
        "name": "at-night-temp",
        "cf-input-placeholder": "Choose one of the above",
        "cf-questions": "Do you wake up in the middle of the night from being cold or hot and adjust your covers?",
        "children":[
            {
                "tag": "input",
                "type": "radio",
                "name": "at-night-temp",
                "cf-label": "Yes",
                "value": "Yes"
            },
            {
                "tag": "input",
                "name": "at-night-temp",
                "type": "radio",
                "cf-label": "No",
                "value": "No"
            }
        ]
    },

    {
        "tag": "fieldset",
        "type": "Radio buttons",
        "name": "mattress-age",
        "cf-input-placeholder": "How old is your mattress?",
        "cf-questions": "How many years old is your mattress?",
        "children":[
            {
                "tag": "input",
                "type": "radio",
                "name": "mattress-age",
                "cf-label": "0-4",
                "value": "0-4"
            },
            {
                "tag": "input",
                "type": "radio",
                "name": "mattress-age",
                "cf-label": "4-8",
                "value": "4-8"
            },
            {
                "tag": "input",
                "type": "radio",
                "name": "mattress-age",
                "cf-label": "8+",
                "value": "8+"
            }
        ]
    }

]

var options = {
  formEl: document.getElementById("form"),
  context: document.getElementById("cf-context"),
  userImage: "https://blogcdn1.secureserver.net/wp-content/uploads/2014/06/create-a-gravatar-beard.png",
  // preventAutoFocus: true,
  robotImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0BAMAAAA5+MK5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEW6xGLCy3PFzXvCy3XBynPr7tH////u8Njq7c7v8dv9/fn09uf8/Pi3jz+/AAAAAWJLR0QGYWa4fQAAAWFJREFUeNrtzzEBQFAARVEZRJBABiFEMEth1kMEu1w25s/A45z9DreqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCD6ubQFoXd1fA1+uEwFoXTGc5PT1i3bt26devWrVu3bt26devWrVu3Hsi6devWrVu3bt269UjWrVu3bt26devWrUeybt26devWrVu3bj2SdevWrVu3bt26deuRrFu3bt26devWrVuPZP0W62msW7du3bp169atW49k3bp169Z/sL6sJbYvrY9F4WTdeiDr1q1bt27dunXr1iNZt27dunXr1q1btx7JunXr1q1bt27duvVI1q1bt27dunXr1q1Hsm7dunXr1q1bt249knXr1q1bt27dunXrkaxbt27dunXr1q1bj2Td+q/WAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB62A4xTVfc8JhDCAAAAAElFTkSuQmCC",
  submitCallback: function() {
    var formData = conversationalForm.getFormData();
    var formDataSerialized = conversationalForm.getFormData(true);
    console.log("Formdata:", formData);
    console.log("Formdata, obj:", formDataSerialized);
    conversationalForm.addRobotChatResponse("Check the dev console for FormatData output.")
    $('.answer').innerText = JSON.stringify(formDataSerialized, null, 2)
    toggle()
  }
}

$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

function toggle() {
  $('#cf-context').style.display = $('#cf-context').style.display == 'none' ? 'block' : 'none'
  $('main').style.display = $('main').style.display == 'block' ? 'none' : 'block'
}


// check formless.json
var testValidation = function(dto, success, error){
    console.log("testValidation setup from formless.json, dto:", dto);
    if(dto.text.indexOf("holmes") != -1)
        return success();
    return error();
};

window.onStart = function () {
    $('#cf-context').style.display = 'block'
    window.conversationalForm = window.cf.ConversationalForm.startTheConversation({
        options: options,
        tags: tags.slice()
    });
}

// onStart()
