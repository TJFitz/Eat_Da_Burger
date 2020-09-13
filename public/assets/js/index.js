$(() => {
  $(".newBurger").on("submit", (event) => {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".devourbtn").on("click", function () {
    let id = $(this).data("id");
    let status = $(this).data("devoured");
    let burgerId = {
      id: id,
      devoured: status,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerId,
    }).then(() => {
      location.reload();
    });
  });

  $(".removebtn").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      data: id,
    }).then(() => {
      location.reload();
    });
  });
});
