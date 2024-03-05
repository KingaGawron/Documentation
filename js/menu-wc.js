'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">paw-pall documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' : 'data-bs-target="#xs-components-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' :
                                            'id="xs-components-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                            <li class="link">
                                                <a href="components/AddCaretakerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCaretakerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaretakerCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaretakerCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaretakerDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaretakerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaretakerPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaretakerPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaretakersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaretakersListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' :
                                        'id="xs-injectables-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaretakerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaretakerService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' : 'data-bs-target="#xs-pipes-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' :
                                            'id="xs-pipes-links-module-AppModule-abf87c1cb2a50c36ed77514846abf15b616bd2bc8726fdea7c142ab31c9f2484878508accf9c447e1c819602bc9997bb3ec1a956f9da4f7a4db987ff9f346c4a"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SortPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/UserConfirmComponent.html" data-type="entity-link" >UserConfirmComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Caretaker.html" data-type="entity-link" >Caretaker</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CaretakerService.html" data-type="entity-link" >CaretakerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Amenities.html" data-type="entity-link" >Amenities</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/dogCatOther.html" data-type="entity-link" >dogCatOther</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/dogCatOther-1.html" data-type="entity-link" >dogCatOther</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICaretakerBase.html" data-type="entity-link" >ICaretakerBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ikeyvaluepair.html" data-type="entity-link" >Ikeyvaluepair</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/offer.html" data-type="entity-link" >offer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/offer-1.html" data-type="entity-link" >offer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photo.html" data-type="entity-link" >Photo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserForLogin.html" data-type="entity-link" >UserForLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserForRegister.html" data-type="entity-link" >UserForRegister</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});