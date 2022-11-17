import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        // console.log(data.inputValue);
        // this.textvalue = data.inputValue;
    }
    // update() {
    //     this.dialogRef.close({ event: 'update', data: this.textvalue });
    //     console.log(this.textvalue);
    // }

    edit(): void {
        this.dialogRef.close(this.data.inputValue);
    }
    onNoClick() {
        this.dialogRef.close(this.data.inputValue);
    }
    ngOnInit(): void {}
}
