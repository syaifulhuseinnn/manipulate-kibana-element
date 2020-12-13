function checkClass() {
    let div = document.querySelector('div[style="width: 400px;"]')
    let euiPanel = document.querySelector('div.euiPanel.euiComboBoxOptionsList.euiComboBoxOptionsList--bottom[data-test-subj="comboBoxOptionsList filterFieldSuggestionList-optionsList"]')
    let reactVirtualizedGrid = document.querySelector('.ReactVirtualized__Grid.ReactVirtualized__List')
    let reactVirtualizedInnerScrollContainer = document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')
    let euiComboxGlobalFilterEditor = document.querySelector('.euiComboBox.globalFilterEditor__fieldInput')
    let euiContextMenu = document.querySelector('div.euiContextMenu[style="height: 297px; width: 420px;"]')

    if (div != null) {
        div.style.width = "620px"
        euiComboxGlobalFilterEditor.style.maxWidth = "408px"
    }

    if (euiPanel != null) {
        euiPanel.style.width = "408px"
        reactVirtualizedInnerScrollContainer.style.maxWidth = "408px"
    }

    if (euiContextMenu != null) {
        euiContextMenu.style.width = "620px"
        euiComboxGlobalFilterEditor.style.maxWidth = "408px"
    }
}

let scheduller = setInterval(checkClass, 50)