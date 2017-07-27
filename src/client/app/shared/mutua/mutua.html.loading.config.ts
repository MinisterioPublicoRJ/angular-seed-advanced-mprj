
/*****************************************************
** AUTOMATICALLY CREATED HTML LOADING CONFIGURATION **
*****************************************************/

// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'

// Included by 'web.modules.ts' to load the needed components and modules and make them available to the application

// components
/////////////

import { AppComponent } from '../../components/app.component';
import { AboutComponent } from '../../components/about/about.component';
import { HomeComponent } from '../../components/home/home.component';
import { GvHomeComponent } from '../../components/pages/gv-home/gv-home.component';

export const MutuaExportedComponents: any[] = [AppComponent,AboutComponent,HomeComponent,GvHomeComponent];

// routes
/////////

import { AboutRoutes } from '../../components/about/about.routes';
import { HomeRoutes } from '../../components/home/home.routes';
import { GvHomeRoutes } from '../../components/pages/gv-home/gv-home.routes';

export const MutuaExportedRoutes: any[] = [...AboutRoutes,...HomeRoutes,...GvHomeRoutes];

// modules
//////////

// BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MHelloWorldModule
import { MHelloWorldModule } from '../modules/m-hello-world/m-hello-world.module';
// NgbModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// PRIMENG_MODULES
import { AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CalendarModule,CarouselModule,ChartModule,CheckboxModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule } from 'primeng/primeng';
let PRIMENG_MODULES: any[] = [AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CalendarModule,CarouselModule,ChartModule,CheckboxModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule];

export const MutuaExportedModules: any[] = [BrowserAnimationsModule,MHelloWorldModule.forRoot(),NgbModule.forRoot(),...PRIMENG_MODULES];

export const MutuaAppComponent: any = AppComponent;
