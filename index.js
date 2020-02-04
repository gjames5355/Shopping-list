function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('ul').append(`<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`);
    $('#shopping-list-entry').val('');
  });
}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).parent().parent().remove();
  });
}

function main() {
  addItem();
  checkItem();
  deleteItem();
}

$(main);