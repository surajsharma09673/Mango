import {
  DefaultValueAccessor,
  FooterComponent,
  FormControlName,
  FormGroupDirective,
  FormService,
  HeaderComponent,
  HomeProductService,
  LoaderService,
  LoginService,
  MatButton,
  MatError,
  MatFormField,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  PopupService,
  RegisterService,
  SharedModule,
  TokenService,
  Validators,
  ɵNgNoValidate
} from "./chunk-Q6466NZD.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-4V623VH6.js";
import {
  CurrencyPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NDXHV5NK.js";

// src/app/share-module/FormConfig/login.config.ts
var loginFormConfig = {
  validationRules: {
    UserName: [Validators.required],
    Password: [Validators.required]
  },
  formInstance: {
    UserName: "",
    Password: ""
  }
};

// src/app/HomePage/Account/login/login.component.ts
function LoginComponent_div_0_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " User Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_0_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleLoginPopup());
    });
    \u0275\u0275elementStart(3, "mat-icon", 4);
    \u0275\u0275text(4, "clear");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onSubmit());
    });
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275template(10, LoginComponent_div_0_mat_error_10_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275template(15, LoginComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 10);
    \u0275\u0275text(17, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.navigateToRegister());
    });
    \u0275\u0275text(19, " Register ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r0.loginForm.get("UserName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.loginForm.get("UserName")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.loginForm.get("Password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.loginForm.get("Password")) == null ? null : tmp_2_0.touched));
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(loginservice, formService, router, popupService) {
    this.loginservice = loginservice;
    this.formService = formService;
    this.router = router;
    this.popupService = popupService;
    this.showLogin = true;
    console.log("login");
    this.loginForm = this.formService.createForm(loginFormConfig.formInstance, loginFormConfig.validationRules);
  }
  ngOnInit() {
    this.loginForm.get("Name")?.setValue("suraj");
    this.loginForm.get("EmailOrPhoneNumber")?.setValue("7876309670");
    this.loginForm.get("Password")?.setValue("UNIpay@123");
  }
  onSubmit() {
    const loginFormValues = this.loginForm.value;
    if (this.loginForm.valid) {
      this.login(loginFormValues);
    }
  }
  login(Logindetail) {
    this.loginservice.login(Logindetail).subscribe((res) => {
      if (res.isSuccess) {
        this.router.navigate(["/admin/dashboard"]);
      }
      console.log("logindata", res);
    });
  }
  toggleLoginPopup() {
    this.showLogin = this.popupService.togglePopup(this.showLogin);
  }
  navigateToRegister() {
    this.router.navigate(["/home/register"]);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(FormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PopupService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-popup"], ["mat-icon-button", "", 1, "close-button", 3, "click"], ["aria-label", "Close"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "UserName", 1, "input-field"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "Password", 1, "input-field"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-stroked-button", "", "color", "accent", 1, "register-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LoginComponent_div_0_Template, 20, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.showLogin);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName, MatIcon, MatButton, MatIconButton, MatInput, MatFormField, MatLabel, MatError], styles: ["\n\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #1976d2;\n  color: white;\n}\n.register-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  align-self: flex-end;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: transparent;\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out;\n}\n.register-button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n  border-color: #999;\n}\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\HomePage\\Account\\login\\login.component.ts", lineNumber: 17 });
})();

// src/app/share-module/FormConfig/register.config.ts
var registerFormConfig = {
  validationRules: {
    Email: [Validators.required],
    Name: [Validators.required],
    Password: [Validators.required, Validators.minLength(8)],
    PhoneNumber: [Validators.required, Validators.minLength(8)]
  },
  formInstance: {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Password: ""
  }
};

// src/app/HomePage/Account/register/register.component.ts
function RegisterComponent_div_0_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Invalid email format. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password should be at least 6 characters long. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Phone Number is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.errorMessage);
  }
}
function RegisterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function RegisterComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.toggleRegisterPopup());
    });
    \u0275\u0275elementStart(3, "mat-icon", 4);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_div_0_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.onSubmit());
    });
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275template(10, RegisterComponent_div_0_mat_error_10_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275template(15, RegisterComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 8)(16, RegisterComponent_div_0_mat_error_16_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 6)(18, "mat-label");
    \u0275\u0275text(19, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 10);
    \u0275\u0275template(21, RegisterComponent_div_0_mat_error_21_Template, 2, 0, "mat-error", 8)(22, RegisterComponent_div_0_mat_error_22_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 11)(24, "mat-label");
    \u0275\u0275text(25, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 12);
    \u0275\u0275template(27, RegisterComponent_div_0_mat_error_27_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, RegisterComponent_div_0_div_28_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(29, "button", 14);
    \u0275\u0275text(30, "Register ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 15);
    \u0275\u0275listener("click", function RegisterComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.navigateToLogin());
    });
    \u0275\u0275text(32, " Login ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.registerForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r0.registerForm.get("Name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.registerForm.get("Name")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.registerForm.get("PhoneNumber")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.registerForm.get("PhoneNumber")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor(registerService, formService, router, popupService, loaderservice) {
    this.registerService = registerService;
    this.formService = formService;
    this.router = router;
    this.popupService = popupService;
    this.loaderservice = loaderservice;
    this.showRegister = true;
    this.errorMessage = "";
    this.registerForm = this.formService.createForm(registerFormConfig.formInstance, registerFormConfig.validationRules);
  }
  ngOnInit() {
    this.registerForm.get("Name")?.setValue("suraj");
    this.registerForm.get("Email")?.setValue("8876309673");
    this.registerForm.get("Password")?.setValue("Suraj@123456");
  }
  onSubmit() {
    const Userdata = this.registerForm.value;
    this.register(Userdata);
  }
  register(Userdata) {
    if (this.registerForm.valid) {
      this.loaderservice.showLoader();
      this.registerService.register(Userdata).subscribe((res) => {
        console.log("registerdataa", res);
        this.loaderservice.hideLoader();
      }, (error) => this.handleError(error));
    }
  }
  navigateToLogin() {
    this.router.navigate(["/home/login"]);
  }
  toggleRegisterPopup() {
    this.showRegister = this.popupService.togglePopup(this.showRegister);
    ;
  }
  handleError(error) {
    this.errorMessage = error.error;
    setTimeout(() => {
      this.loaderservice.hideLoader();
    }, 2e3);
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(RegisterService), \u0275\u0275directiveInject(FormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(LoaderService));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 1, vars: 1, consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-popup"], ["mat-icon-button", "", 1, "close-button", 3, "click"], ["aria-label", "Close"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "Name", "id", "Name", 1, "input-field"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "Email", "id", "Email", 1, "input-field"], ["matInput", "", "type", "password", "formControlName", "Password", "id", "Password", 1, "input-field"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "PhoneNumber", "id", "PhoneNumber", 1, "input-field"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "register-button"], ["mat-stroked-button", "", "color", "accent", "type", "button", 1, "login-button", 3, "click"], [1, "error-message"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RegisterComponent_div_0_Template, 33, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.showRegister);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName, MatIcon, MatButton, MatIconButton, MatInput, MatFormField, MatLabel, MatError], styles: ["\n\n.login-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-top: 20px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: transparent;\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out;\n}\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n  border-color: #999;\n}\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n.register-button[_ngcontent-%COMP%]:hover {\n  background-color: #1976d2;\n  color: white;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\HomePage\\Account\\register\\register.component.ts", lineNumber: 18 });
})();

// src/app/HomePage/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(Tokenservice, router) {
    this.Tokenservice = Tokenservice;
    this.router = router;
    this.checkUserRoleAndNavigate();
  }
  checkUserRoleAndNavigate() {
    if (this.Tokenservice.validateToken())
      this.router.navigate(["/admin/dashboard"]);
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\HomePage\\home\\home.component.ts", lineNumber: 10 });
})();

// src/app/HomePage/Product/product-detail/product-detail.component.ts
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "a", 9);
    \u0275\u0275text(17, "Add to Cart");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", ctx_r0.product.name);
    \u0275\u0275property("src", ctx_r0.product.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 6, ctx_r0.product.price, "USD", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.description);
  }
}
var _ProductDetailComponent = class _ProductDetailComponent {
  constructor(route, HomeproductService) {
    this.route = route;
    this.HomeproductService = HomeproductService;
    this.numberOfItems = 1;
    this.productId = null;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params) {
        const productIdString = params.get("id");
        this.productId = productIdString ? +productIdString : null;
        console.log("Product ID:", this.productId);
        this.HomeproductService.getProductById(this.productId).subscribe((res) => {
          this.product = res;
          console.log(res, "here");
        });
      }
    });
  }
  incrementItems() {
    this.numberOfItems++;
  }
  decrementItems() {
    if (this.numberOfItems > 1) {
      this.numberOfItems--;
    }
  }
};
_ProductDetailComponent.\u0275fac = function ProductDetailComponent_Factory(t) {
  return new (t || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HomeProductService));
};
_ProductDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 3, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "img-fluid", 3, "src", "alt"], [1, "text-danger", 2, "font-size", "24px", "font-weight", "bold"], [1, "badge", "bg-warning", "text-white"], [1, "description-container"], [1, "mt-3"], ["href", "#", 1, "btn", "btn-success"]], template: function ProductDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_div_0_Template, 18, 11, "div", 0);
    \u0275\u0275elementStart(1, "h1");
    \u0275\u0275text(2, "Data Auncha EKchin MA");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.product);
  }
}, dependencies: [NgIf, CurrencyPipe], styles: ["\n\n/*# sourceMappingURL=product-detail.component.css.map */"] });
var ProductDetailComponent = _ProductDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\HomePage\\Product\\product-detail\\product-detail.component.ts", lineNumber: 13 });
})();

// src/app/HomePage/Product/product-card/product-card.component.ts
function ProductCardComponent_div_3_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275listener("click", function ProductCardComponent_div_3_a_17_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const product_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleDescription(product_r1.productId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showFullDescription[product_r1.productId] ? "See less" : "See more", " ");
  }
}
var _c0 = (a0) => ({ "collapsed": a0 });
function ProductCardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275elementStart(4, "div", 7)(5, "h5", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "p", 13);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ProductCardComponent_div_3_a_17_Template, 2, 1, "a", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "a", 16);
    \u0275\u0275listener("click", function ProductCardComponent_div_3_Template_a_click_19_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r8);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.viewProductDetail(product_r1.productId));
    });
    \u0275\u0275text(20, "Details");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r1.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 7, product_r1.price, "USD", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c0, !ctx_r0.showFullDescription[product_r1.productId]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showFullDescription[product_r1.productId] ? product_r1.description : \u0275\u0275pipeBind3(16, 12, product_r1.description, 0, 33), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r1.description.length > 35);
  }
}
var _ProductCardComponent = class _ProductCardComponent {
  constructor(HomeproductService, router) {
    this.HomeproductService = HomeproductService;
    this.router = router;
    this.products = [];
    this.showFullDescription = {};
    this.initializeProducts();
  }
  initializeProducts() {
    this.HomeproductService.getAllProduct().subscribe((product) => {
      this.products = product;
    });
  }
  // Function to toggle the visibility of the full description
  toggleDescription(productId) {
    this.showFullDescription[productId] = !this.showFullDescription[productId];
  }
  viewProductDetail(productId) {
    console.log(productId, "yo");
    this.router.navigate(["home/product", productId.toString()]);
  }
};
_ProductCardComponent.\u0275fac = function ProductCardComponent_Factory(t) {
  return new (t || _ProductCardComponent)(\u0275\u0275directiveInject(HomeProductService), \u0275\u0275directiveInject(Router));
};
_ProductCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col-lg-3 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "p-0", "border", "rounded", "product-card", "mb-3"], [1, "card"], ["alt", "Product Image", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "d-flex", "justify-content-between", "py-2"], [1, "text-danger", 2, "font-size", "20px", "font-weight", "bold"], [1, "badge", "bg-warning", "text-white"], [1, "description-container"], [1, "card-text", 3, "ngClass"], ["href", "#", "class", "text-primary mt-2", 3, "click", 4, "ngIf"], [1, "mt-2"], [1, "btn", "btn-success", "form-control", 3, "click"], ["href", "#", 1, "text-primary", "mt-2", 3, "click"]], template: function ProductCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form")(1, "div", 0)(2, "div", 1);
    \u0275\u0275template(3, ProductCardComponent_div_3_Template, 21, 18, "div", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.products);
  }
}, dependencies: [\u0275NgNoValidate, NgControlStatusGroup, NgForm, NgClass, NgForOf, NgIf, SlicePipe, CurrencyPipe], styles: ['\n\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.product-card[_ngcontent-%COMP%] {\n  flex: 0 1 calc(33.33% - 10px);\n  margin: 1px 0;\n  padding: 1px;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out;\n  background-color: #ffffff;\n  cursor: pointer;\n  max-width: 350px;\n}\n@media (max-width: 1200px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(33.33% - 10px);\n  }\n}\n@media (max-width: 992px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(50% - 10px);\n  }\n}\n@media (max-width: 576px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(100% - 10px);\n  }\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 180px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.product-details[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 8px;\n  color: #333333;\n}\n.product-description[_ngcontent-%COMP%] {\n  color: #666666;\n  margin-bottom: 12px;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #e44d26;\n  font-size: 1.1em;\n}\n.collapsed[_ngcontent-%COMP%] {\n  max-height: 3.6em;\n  overflow: hidden;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.product-card[_ngcontent-%COMP%]::before {\n  content: "\\1f958";\n  font-size: 2em;\n  color: #e44d26;\n  display: block;\n  margin-bottom: 10px;\n}\n.description-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.hidden-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 0 5px;\n  font-weight: bold;\n  color: #e44d26;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=product-card.component.css.map */'] });
var ProductCardComponent = _ProductCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\HomePage\\Product\\product-card\\product-card.component.ts", lineNumber: 11 });
})();

// src/app/HomePage/home-page-routing.module.ts
var routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", component: ProductCardComponent },
      { path: "product/:id", component: ProductDetailComponent }
      // Add additional child routes if needed
    ]
  }
];
var _HomePageRoutingModule = class _HomePageRoutingModule {
};
_HomePageRoutingModule.\u0275fac = function HomePageRoutingModule_Factory(t) {
  return new (t || _HomePageRoutingModule)();
};
_HomePageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageRoutingModule });
_HomePageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HomePageRoutingModule = _HomePageRoutingModule;

// src/app/HomePage/home-page.module.ts
var _HomePageModule = class _HomePageModule {
};
_HomePageModule.\u0275fac = function HomePageModule_Factory(t) {
  return new (t || _HomePageModule)();
};
_HomePageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageModule });
_HomePageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  HomePageRoutingModule,
  SharedModule
] });
var HomePageModule = _HomePageModule;
export {
  HomePageModule
};
//# sourceMappingURL=chunk-SJUE2MHQ.js.map
