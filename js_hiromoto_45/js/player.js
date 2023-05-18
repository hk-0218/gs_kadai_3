'use strict';

class Player {
  constructor(id, type, hand) {
    this.id = id;
    this.type = type;
    this.hand = hand;
  }

  selectHand() {
    let selectNode = document.querySelector('[name="select-hand"]');
    this.hand = selectNode.selectedIndex;
    selectHandNode.classList.add("disabled");
    janken();
  }

  autoSelectHand() {
    this.hand = Math.floor(Math.random() * 3 + 1);
  }


}