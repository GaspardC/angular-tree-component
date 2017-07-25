import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';

@Component({
  selector: 'TreeNodeExpander, tree-node-expander',
  encapsulation: ViewEncapsulation.None,
  styles: [
    '.toggle-children-wrapper-expanded .toggle-children { transform: rotate(90deg) }',
    '.toggle-children-wrapper-collapsed .toggle-children { transform: rotate(0); }',
    `.toggle-children-wrapper {
      padding: 2px 3px 5px 1px;
    }`,
    /* tslint:disable */
    `.toggle-children {
        background-image: url(\'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwNS40NTYgNDA1LjQ1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA1LjQ1NiA0MDUuNDU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTc0LjEzNCw2NC4xNDdjLTQuOTg1LDAuMDc4LTkuOTExLDIuMTYzLTEzLjQzOCw1LjY4OGwtNTUsNTVDMi4wOTYsMTI4LjQzMiwwLDEzMy40OTIsMCwxMzguNTgzICAgczIuMDk2LDEwLjE1MSw1LjY5NywxMy43NWwxODMuMjgxLDE4My4yODFjMy41OTksMy42MDEsOC42NTksNS42OTcsMTMuNzUsNS42OTdzMTAuMTUxLTIuMDk2LDEzLjc1LTUuNjk3bDE4My4yODEtMTgzLjI4MSAgIGMzLjYwMS0zLjU5OSw1LjY5Ny04LjY1OSw1LjY5Ny0xMy43NXMtMi4wOTYtMTAuMTUxLTUuNjk3LTEzLjc1bC01NS01NWMtMy41OTgtMy41OTEtOC42NTEtNS42ODEtMTMuNzM0LTUuNjgxICAgYy01LjA4MywwLTEwLjEzNiwyLjA5LTEzLjczNCw1LjY4MUwyMDIuNzI4LDE4NC4zOTdMODguMTY2LDY5LjgzM0M4NC40OTksNjYuMTY5LDc5LjMxOCw2NC4wNyw3NC4xMzQsNjQuMTQ3TDc0LjEzNCw2NC4xNDd6IiBmaWxsPSIjMDA2REYwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\');
        height: 8px;
        width: 9px;
        background-size: contain;
        display: inline-block;
        position: relative;
        top: 1px;
        background-repeat: no-repeat;
        background-position: center;
    }`,
    /* tslint:enable */
    `.toggle-children-placeholder {
        display: inline-block;
        height: 10px;
        width: 10px;
        position: relative;
        top: 1px;
        padding-right: 3px;
    }`
  ],
  template: `
    <ng-container *mobxAutorun>
      <span
        *ngIf="node.hasChildren"
        [class.toggle-children-wrapper-expanded]="node.isExpanded"
        [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
        class="toggle-children-wrapper"
        (click)="node.mouseAction('expanderClick', $event)">

        <span class="toggle-children"></span>
      </span>
      <span
        *ngIf="!node.hasChildren"
        class="toggle-children-placeholder">
      </span>
    </ng-container>
  `
})
export class TreeNodeExpanderComponent {
  @Input() node: TreeNode;

  constructor(private elementRef: ElementRef) {
    deprecatedSelector('TreeNodeExpander', 'tree-node-expander', elementRef);
  }
}
