const stuff = [
    {
      "key": "prefix",
      "type": "select",
      "options": [
        {
          "label": "Mr.",
          "value": "Mr."
        },
        {
          "label": "Mrs.",
          "value": "Mrs."
        },
        {
          "label": "Ms.",
          "value": "Ms."
        },
        {
          "label": "LORD OF THE DEPTHS",
          "value": "Dreadlord"
        }
      ],
      "defaultValue": "Dreadlord",
      "label": "Prefix",
      "required": false,
      "grid": {
        "xs": 24,
        "md": 12,
        "lg": 8
      }
    },
    {
      "key": "firstName",
      "type": "text",
      "maxLength": 20,
      "placeholder": "Enter first name",
      "label": "First Name",
      "required": true,
      "grid": {
        "xs": 24,
        "md": 12,
        "lg": 8
      }
    },
    {
      "key": "lastName",
      "type": "text",
      "maxLength": 20,
      "placeholder": "Enter last name",
      "label": "Last Name",
      "required": true,
      "grid": {
        "xs": 24,
        "md": 12,
        "lg": 8
      }
    },
    {
      "key": "stupid",
      "type": "radio",
      "options": [
        "Yes",
        "No",
        "Prefer not to say"
      ],
      "label": "Are you stupid?",
      "required": true,
      "grid": {
        "xs": 24,
        "md": 12,
        "lg": 8
      }
    }
  ]

  export default stuff;