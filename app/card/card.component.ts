import { Component } from '@angular/core';
import { Input     } from '@angular/core';

import { Task } from '../model/task'; // Import the Task Class Module

@Component({

    moduleId: module.id, // from commonjs
    selector: 'app-card',
    templateUrl: 'card.component.html', // from commonjs, using the moduleId
    styleUrls: ['card.component.css']
})

export class CardComponent{ 

    @Input() task: Task;

}