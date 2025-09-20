const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

let userIcons = [
  "MainActivity",
  "LeviAlias",
  "PencilAlias",
  "PhotoAlias"
];
let currentIcon="LeviAlias";

app.get('/icon', (req, res) => {
    // const icon = userIcons[0];

    res.json({
        success: true,
        icon_alias: currentIcon
    });
});
app.get('/iconList', (req, res) => {
    // const icon = userIcons[0];

    res.json({
        success: true,
        all_icons: userIcons
    });
});
app.get('/', (req, res) => {
    res.send('Welcome to the Icon Server! Use /icon to get the icon alias am setting icons statically through backend.');
});

/* 
app.post('/icon', (req, res) => {
    const { newIcon } = req.body;

    if (!newIcon) {
        return res.status(400).json({ success: false, message: "Please provide a newIcon in request body" });
    }

    currentIcon = newIcon;

    res.json({
        success: true,
        message: `Icon updated successfully to '${newIcon}'`,
        icon_alias: currentIcon
    });
}); */
app.post('/icon', (req, res) => {
    const { newIcon } = req.body;

    if (!newIcon) {
        return res.status(400).json({ success: false, message: "Please provide a newIcon in request body" });
    }

    currentIcon = newIcon;

    if (!userIcons.includes(newIcon)) {
        userIcons.push(newIcon);
    }

    res.json({
        success: true,
        message: `Icon updated successfully to '${newIcon}'`,
        icon_alias: currentIcon,
        all_icons: userIcons
    });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

