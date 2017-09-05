function makeTrelloCard(button) {
    const idList = button.dataset.listId;
    const cardName = button.dataset.cardName;
    const cardDesc = button.dataset.cardDesc;

    const popupUrl = ('https://trello.com/add-card' +
                      '?source=' + window.location.host +
                      '&mode=popup' +
                      '&url=' + encodeURIComponent(window.location.href) +
                      '&name=' + encodeURIComponent(cardName) +
                      '&desc=' + encodeURIComponent(cardDesc) +
                      '&isList=' + encodeURIComponent(idList));

    const popupName = 'add-trello-card';

    const popupX = window.screenX + (window.outerWidth - 500) / 2;
    const popupY = window.screenY + (window.outerHeight - 740) / 2;
    const popupFeatures = 'width=500,height=600,left='+popupX+',top='+popupY;

    window.open(popupUrl, popupName, popupFeatures);
}
