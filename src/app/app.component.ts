import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@Component({
    selector: 'dialog-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // inputValue = new FormControl('', Validators.required);
    inputValue: string = '';
    dialogValue: string = '';
    constructor(private readonly dialog: MatDialog) {}
    openDialog() {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            height: '250px',
            width: '400px',
            data: { inputValue: this.inputValue },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.inputValue = result;
        });
    }
}
