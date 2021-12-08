
    $(document).ready(function () {

        let elemanlar = 0;



        function todoClass(element) {
            this.element = element;
        }

        todoClass.prototype.ekle = function () {
            var todoElement = ` <div class="input-group" id="${this.element.id}">
            <input disabled type="text" class="form-control" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" value="${this.element.text}">
            <div class="input-group-append" id="button-addon4">
                <button id="${this.element.id}Ok" class="btn btn-primary " type="button">Ok</button>
                <button id="${this.element.id}" class="btn btn-danger " type="button">Delete</button>
            </div>
        </div>`

            $("#todoList").append(todoElement)
            this.sil();
            this.onayla()
            return true;

        }

        todoClass.prototype.sil = function () {
            let x = this
            $(".input-group-append #" + x.element.id).on("click", function (event) {

                $("#" + x.element.id).remove()
                elemanlar -= 1;
                degis(elemanlar)
            })
            return true;
        }

        todoClass.prototype.onayla = function () {
            let y = this

            $(".input-group-append #" + y.element.id + "Ok").on("click", function (event) {
                $("#" + y.element.id + " input").css("background-color", "red");
            })
            return true;
        }


        var idNumber = 0;
        $("#button-addon2").on("click", function (event) {
            Girdi();
        })

        $("#todoInput2").keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                Girdi();
            }
        });

        function Girdi() {
            if (elemanlar == 6) {
                alert("There isnt any place")
                $("#todoInput2").val("")
                return
            }
            var todoInputVal = $("#todoInput2").val();
            if (todoInputVal == "") {
                return
            }
            AddTodo(idNumber, todoInputVal)
            $("#todoInput2").val("")
            elemanlar += 1;
            degis(elemanlar);
            idNumber += 1;
        }


        function AddTodo(idNumber, todoInputVal) {
            var q1 = new todoClass({
                id: "q" + idNumber,
                text: todoInputVal
            });
            q1.ekle()
        }

        function degis(elemanlar) {
            $("#elemanSayisi").text(elemanlar)
        }
    })


