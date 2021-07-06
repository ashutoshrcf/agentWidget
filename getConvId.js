lpTag.agentSDK.init();

// NOTE : No sensitive data pwease

const placeForChatData = document.querySelector("#placeForChatData");
const pathToData = "chatInfo.rtSessionId";

const getErrorMessagesBtn = document.querySelector("#getErrorMessages");
getErrorMessagesBtn.addEventListener("click", getErrorMessagesBtnClickHandler);

function getErrorMessagesBtnClickHandler(e) {
  lpTag.agentSDK.get(pathToData, onSuccess, onError);
}

function onSuccess(data) {
  console.log(data);

  placeForChatData.innerHTML = data;
}

function onError(err) {
  console.log(err);
}


/*
1. The Bot will capture the API result (error message).
2. The Bot will save all error messages to the context warehouse against the ConversationID, 
   before escalating the conversation to a human agent.
3. The widget created by TCS will call the FaaS Function which will get the stored messages for 
   the current ConversationID and send them back to the widget.
4. The human agent will be able to see the error messages saved by the bot and continue the customer conversation.
*/