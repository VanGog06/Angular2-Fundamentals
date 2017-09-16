import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'comment-form',
  templateUrl: './create.car.comment.form.component.html'
})

export class CreateCarCommentFormComponent {
  @Output() commentCreated = new EventEmitter<object>();
  comment = { owner: '', message: '' };

  createComment() {
    this.commentCreated.emit(this.comment);
  }
}
