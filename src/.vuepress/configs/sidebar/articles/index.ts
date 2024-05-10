import { SidebarGroupItem } from 'vuepress-theme-hope'
import { template as TEMPLATE_DONNYWALS } from './donnywals.com';
import { template as TEMPLATE_DOUGGREGOR } from './douggregor.net';
import { template as TEMPLATE_D2 } from './d2.naver.com';
import { template as TEMPLATE_FREECODECAMP } from './freecodecamp.org';
import { template as TEMPLATE_FRONTENDMASTER } from './frontendmasters.com';
import { template as TEMPLATE_NHN } from './meetup.nhncloud.com';
import { template as TEMPLATE_GANGNAMUNNI } from './blog.gangnamunni.com';
import { template as TEMPLATE_WOOWAHAN } from './techblog.woowahan.com';
import { template as TEMPLATE_GMARKET } from './dev.gmarket.com'; 
import { template as TEMPLATE_LINECORP } from './engineering.linecorp.com';
import { template as TEMPLATE_KT_ACADEMY } from './kt.academy';
import { template as TEMPLATE_DROIDCON } from './droidcon.com';
import { template as TEMPLATE_SITEPOINT } from './sitepoint.com';
import { template as TEMPLATE_YOZM } from './yozm.wishket.com';
import { template as TEMPLATE_DEVKUMA } from './devkuma.com';
import { template as TEMPLATE_DEVTOOLSTIPS } from './devtoolstips.org';
import { template as TEMPLATE_PICCALILLI } from './piccalil.li';
import { template as TEMPLATE_JOHNNYREILLY } from'./johnnyreilly.com';
import { template as TEMPLATE_CODEMAZE } from './code-maze.com';
import { template as TEMPLATE_TOWARDSDATASCIENCE } from './towardsdatascience.com';
import { template as TEMPLATE_SHOPIFY } from './shopify.engineering';
import { template as TEMPLATE_RUTGO_LETSGO } from './tistory.com/rutgo-letsgo';
import { template as TEMPLATE_ANTONIOLEIVA } from './antonioleiva.com';
import { template as TEMPLATE_ZUMINTERNET } from './zuminternet.github.io';

const EXT_MD = "md";
const DEFAULT_KEY_ALL = "all";
const PATH_BASE_ARTICLES = "/explore/articles"

export type SidebarInfoTemplate = {
  name: string,
  faviconPath: string,
  linksMap: Map<string, string[]>,
}

export const sidebarByTemplate = (itemTemplate: SidebarInfoTemplate, type: string = DEFAULT_KEY_ALL): SidebarGroupItem => {
  let _all: string[] = [];
  for (const [_, values] of itemTemplate.linksMap) {
    _all.push(...values);
  }
  
  const _children: string[] = (
    // (type === "all") 
    // ?  _all 
    // : 
    itemTemplate.linksMap.get(type)
  )?.map((e: string) => `${PATH_BASE_ARTICLES}/${itemTemplate.name}/${e}.${EXT_MD}`) ?? []

  return {
    text: itemTemplate.name,
    collapsible: true,
    icon: itemTemplate.faviconPath,
    children: _children
  }
}

export const articleSidebars = {
  freecodecamp:       (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_FREECODECAMP, type),
  frontendmaster:     (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_FRONTENDMASTER, type),
  d2:                 (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_D2, type),
  nhn:                (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_NHN, type),
  gangnamunni:        (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_GANGNAMUNNI, type),
  yozm:               (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_YOZM, type),
  woowahan:           (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_WOOWAHAN, type),
  gmarket:            (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_GMARKET, type),
  linecorp:           (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_LINECORP, type),
  ktAcademy:          (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_KT_ACADEMY, type),
  droidcon:           (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_DROIDCON, type),
  sitepoint:          (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_SITEPOINT, type),
  douggregor:         (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_DOUGGREGOR, type),
  donnywals:          (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_DONNYWALS, type),
  piccalilli:         (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_PICCALILLI, type),
  johnnyreilly:       (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_JOHNNYREILLY, type),
  codemaze:           (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_CODEMAZE, type),
  devkuma:            (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_DEVKUMA, type),
  devtoolstips:       (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_DEVTOOLSTIPS, type), 
  towardsdatascience: (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_TOWARDSDATASCIENCE, type),
  shopify:            (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_SHOPIFY, type),
  rutgoLetsgo:        (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_RUTGO_LETSGO, type),
  antonioleiva:       (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_ANTONIOLEIVA, type),
  zuminternet:        (type: string = DEFAULT_KEY_ALL): SidebarGroupItem => sidebarByTemplate(TEMPLATE_ZUMINTERNET, type),
}

export const hackingwithswift = (): SidebarGroupItem => ({
  text: 'hackingwithswift.com',
  collapsible: true,
  icon: 'https://hackingwithswift.com/favicon.svg',
  children: [
    '/explore/articles/hackingwithswift.com/learn-essential-swift-in-one-hour.md',
    {
      text: 'SwiftUI by Example',
      collapsible: true,
      icon: 'fa-brands fa-swift',
      children: [
        '/explore/articles/hackingwithswift.com/swiftui-by-example/README.md',
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-vs-interface-builder-and-storyboards.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/frequently-asked-questions-about-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-follow-this-quick-start-guide.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/migrating-from-uikit-to-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/whats-in-the-basic-template.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/dedication.md',
          ]
        }, {
          text: 'Building a complete project',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tutorial-building-a-complete-project.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/building-a-menu-using-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/composing-views-to-create-a-list-row.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/polishing-designs-with-fonts-and-colors.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/displaying-a-detail-screen-with-navigationlink.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/observable-objects-environment-objects-and-published.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/adding-items-to-an-order-with-environmentobject.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/adding-tabview-and-tabitem.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/bindings-and-forms.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/two-way-bindings-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/formatting-interpolated-strings-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/presenting-an-alert.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/adding-swipe-to-delete-and-editbutton.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/wrap-up-our-swiftui-project-is-complete.md'
          ]
        }, {
          text: 'Working with static text',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-static-labels-with-a-text-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-advanced-text-styling-using-attributedstring.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-text-alignment-using-multilinetextalignment.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-text-inside-text-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-spacing-between-letters-in-text.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-dates-inside-text-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-textfield-uppercase-or-lowercase-using-textcase.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-text-and-an-icon-side-by-side-using-label.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-a-placeholder-using-redacted.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mark-content-as-private-using-privacysensitive.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-markdown-content-in-text.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-way-links-are-opened.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-text.md',
          ]
        }, {
          text: 'Images, shapes, and media',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-images-using-image-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-tile-an-image.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-images-using-sf-symbols.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-gradient.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-images-and-other-views-as-a-backgrounds.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-solid-shapes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fill-and-stroke-shapes-at-the-same-time.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-part-of-a-solid-shape-using-trim.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/when-should-you-use-containerrelativeshape.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-play-movies-with-videoplayer.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-integrate-spritekit-using-spriteview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-a-remote-image-from-a-url.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-custom-colors-and-transparency-with-sf-symbols.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-pictures-using-photospicker.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-import-videos-using-photospicker.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-sf-symbols.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-red-green-and-blue-values-from-a-color.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-shapes-to-create-new-shapes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-load-custom-colors-from-an-asset-catalog.md',
          ]
        }, {
          text: 'View layout',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-give-a-view-a-custom-frame.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-spacing-around-individual-views-using-padding.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-relative-sizes-using-geometryreader.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-place-content-outside-the-safe-area.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-return-different-view-types.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-views-in-a-loop-using-foreach.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-layout-priority-using-layoutpriority.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-views-the-same-width-or-height.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-provide-visual-structure-using-foreground-styles.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-inset-the-safe-area-with-custom-content.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-home-indicator-and-other-system-ui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stop-system-gestures-from-interfering-with-your-own.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-change-between-vstack-and-hstack.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-layout-using-the-layout-protocol.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-an-adaptive-layout-with-viewthatfits.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-extra-padding-to-the-safe-area.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-size-of-a-view-relative-to-its-container.md',
          ]
        }, {
          text: 'Stacks, grids, scrollviews',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-stacks-using-vstack-and-hstack.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-stack-layouts-with-alignment-and-spacing.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-fixed-size-spacer.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-layer-views-on-top-of-each-other-using-zstack.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-order-of-view-layering-using-z-index.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-different-layouts-using-size-classes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-position-views-in-a-fixed-grid.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dismiss-the-keyboard-when-the-user-scrolls.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-column-lists-using-table.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-flash-the-scroll-bar-indicators-of-a-scrollview-or-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-snap-with-paging-or-between-child-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-views-scroll-with-a-custom-transition.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-scrollview-start-at-the-bottom.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-scrollview-clipping-so-contents-overflow.md',
          ]          
        }, {
          text: 'User interface controls',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-state.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-tappable-button.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-get-bordered-buttons-that-stand-out.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together-with-controlgroup.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-text-from-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-take-action-when-the-user-submits-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-border-to-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-placeholder-to-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-autocorrect-in-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-dismiss-the-keyboard-for-a-textfield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-textfield-or-texteditor-have-default-focus.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-textfield-expand-vertically-as-the-user-types.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-format-a-textfield-for-numbers.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-secure-text-fields-using-securefield.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toggle-switch.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-slider-and-read-values-from-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-picker-and-read-values-from-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-date-picker-and-read-values-from-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-segmented-control-and-read-values-from-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-stepper-and-read-values-from-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-line-editable-text-with-texteditor.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-select-a-color-with-colorpicker.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-progress-on-a-task-using-progressview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-indeterminate-progress-using-progressview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-map-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-annotations-in-a-map-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-open-web-links-in-safari.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-select-multiple-dates.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-buttons-that-repeat-their-action-when-pressed.md',
          ]
        }, {
          text: 'Responding to events',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-view-is-shown-when-your-app-launches.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-code-when-your-app-launches.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-an-appdelegate-to-a-swiftui-app.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-device-rotation.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-toolbar-to-the-keyboard.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-an-asynchronous-task-when-a-view-is-shown.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-the-user-paste-data-into-your-app.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-share-content-using-the-system-share-sheet.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-find-and-replace-text.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-support-drag-and-drop-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-and-respond-to-key-press-events.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-haptic-effects-using-sensory-feedback.md',
          ]
        }, {
          text: 'Taps and gestures',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-gesture-recognizer-to-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-tap-and-double-tap-gestures.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-gesture-chains-using-sequencedbefore.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-user-hovering-over-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-shake-gestures.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-the-tappable-area-of-a-view-using-contentshape.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-disable-taps-for-a-view-using-allowshittesting.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-location-of-a-tap-inside-a-view.md',
          ]
        }, {
          text: 'Advanced state',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/whats-the-difference-between-observedobject-state-and-environmentobject.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-stateobject-to-create-and-monitor-external-objects.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-observedobject-to-manage-state-from-external-objects.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-environmentobject-to-share-data-between-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-send-state-updates-manually-using-objectwillchange.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-constant-bindings.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-bindings.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-a-timer-with-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-some-code-when-state-changes-using-onchange.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md',
          ]
        }, {
          text: 'Lists',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-lists.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-of-static-items.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-of-dynamic-items.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-delete-rows-from-a-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-move-rows-in-a-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-sections-to-a-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-editing-on-a-list-using-editbutton.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-set-the-background-color-of-list-rows-using-listrowbackground.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-grouped-and-inset-grouped-lists.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-expanding-lists.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-scroll-to-a-specific-row-in-a-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-allow-row-selection-in-a-list.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-implicit-stacking.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-visibility-and-color.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-enable-pull-to-refresh.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-custom-swipe-action-buttons-to-a-list-row.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-search-bar-to-filter-your-data.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-search-tokens-to-a-search-field.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-list-or-a-foreach-from-a-binding.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-list-row-separator-insets.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-tint-color-for-individual-list-rows.md',
          ]
        }, {
          text: 'Forms',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-forms.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/basic-form-design.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/breaking-forms-into-sections.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/pickers-in-forms.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/enabling-and-disabling-elements-in-forms.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/showing-and-hiding-form-rows.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-align-form-text-and-controls-neatly-with-labeledcontent.md',
          ]
        }, {
          text: 'Containers',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-containers.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-views-in-a-tab-bar-using-tabview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-scrolling-pages-of-content-using-tabviewstyle.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-together.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-status-bar.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-reveal-content-using-disclosuregroup.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-toolbar-and-add-buttons-to-it.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-customize-toolbar-buttons.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-badge-to-tabview-items-and-list-rows.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-group-views-visually-using-groupbox.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-the-tab-bar-navigation-bar-or-other-toolbars.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-background-color-of-navigation-bars-tab-bars-and-toolbars.md',
          ]
        }, {
          text: 'Navigation',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-navigation.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-embed-a-view-in-a-navigation-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-edit-your-navigation-title.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-bar-items-to-a-navigation-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-onto-a-navigationstack.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-push-a-new-view-when-a-list-row-is-tapped.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-programmatic-navigation-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-save-and-load-navigationstack-paths-using-codable.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-two-column-or-three-column-layout-with-navigationsplitview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-hide-and-show-the-sidebar-programmatically.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-a-views-width-in-navigationsplitview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-customize-the-display-mode-of-navigationsplitview.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-control-which-navigationsplitview-column-is-shown-in-compact-layouts.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-an-inspector-to-any-view.md'
          ]
        }, {
          text: 'Alerts and menus',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/working-with-presentations.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-alert.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-a-textfield-to-an-alert.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-actions-to-alert-buttons.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-multiple-alerts-in-a-single-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-an-action-sheet.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-context-menu.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-recommend-another-app-using-appstoreoverlay.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-menu-when-a-button-is-pressed.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-let-users-pick-options-from-a-menu.md',
          ]
        }, {
          text: 'Presenting views',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-new-view-using-sheets.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-multiple-sheets.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-a-view-dismiss-itself.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-present-a-full-screen-modal-view-using-fullscreencover.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-show-a-popover-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-prevent-a-sheet-from-being-dismissed-with-a-swipe.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-display-a-bottom-sheet.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-ask-the-user-to-review-your-app.md',
          ]
        }, {
          text: 'Transforming views',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-position-of-a-view-using-its-offset.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-color-the-padding-around-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-stack-modifiers-to-create-more-advanced-effects.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-around-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-border-inside-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-marching-ants-border-effect.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-shadow-around-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-clip-a-view-so-only-part-is-visible.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-rotate-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-rotate-a-view-in-3d.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-scale-a-view-up-or-down.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-round-the-corners-of-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-opacity-of-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-the-accent-color-of-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-mask-one-view-with-another.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-blur-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-blend-views-together.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-adjust-views-by-tinting-desaturating-and-more.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-button-with-buttonstyle.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-progressview-with-progressviewstyle.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/customizing-toggle-with-togglestyle.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-change-the-background-color-of-list-texteditor-and-more.md',
          ]
        }, {
          text: 'Drawing',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/swiftuis-built-in-shapes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-custom-path.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-polygons-and-stars.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-draw-a-checkerboard.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-uibezierpath-and-cgpath-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-convert-a-swiftui-view-to-an-image.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-render-a-swiftui-view-to-a-pdf.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-visual-effect-blurs.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-animated-drawings-with-timelineview-and-canvas.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-metal-shaders-to-swiftui-views-using-layer-effects.md',
          ]
        }, {
          text: 'Animation',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-basic-animations.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-spring-animation.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-changes-in-binding-values.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-an-explicit-animation.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-delay-an-animation.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-start-an-animation-immediately-after-a-view-appears.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-apply-multiple-animations-to-a-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-synchronize-animations-from-one-view-to-another-with-matchedgeometryeffect.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-and-remove-views-with-a-transition.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-transitions.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-asymmetric-transitions.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-custom-transition.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-animate-the-size-of-text.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-override-animations-with-transactions.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-run-a-completion-callback-when-an-animation-finishes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-multi-step-animations-using-phase-animators.md',
          ]
        }, {
          text: 'Composing View',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-and-compose-custom-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-combine-text-views-together.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-store-views-as-properties.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-custom-modifiers.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-wrap-a-custom-uiview-for-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-modifiers-for-a-uiviewrepresentable-struct.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-insert-images-into-text.md',
          ]
        }, {
          text: 'Cross-platform SwiftUI',
          collapsible: true,
          children: [
            '/swift/swiftui-by-example/20-cross-platform-swiftui/learn-once-apply-anywhere.md',
            '/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-get-translucent-lists-on-macos.md',
            '/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-make-carousel-lists-on-watchos.md',
            '/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-read-the-digital-crown-on-watchos-using-digitalcrownrotation.md',
            '/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-open-a-new-window.md',
            '/swift/swiftui-by-example/20-cross-platform-swiftui/how-to-enable-vertical-page-scrolling.md',
          ]
        }, {
          text: 'Data',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-using-core-data-with-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-configure-core-data-to-work-with-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-access-a-core-data-managed-object-context-from-a-swiftui-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-core-data-fetch-request-using-fetchrequest.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-filter-core-data-fetch-requests-using-a-predicate.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-add-core-data-objects-from-swiftui-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-delete-core-data-objects-from-swiftui-views.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-limit-the-number-of-items-in-a-fetch-request.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-export-files-using-fileexporter.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-continue-an-nsuseractivity-in-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-read-the-users-location-using-locationbutton.md',
          ]
        }, {
          text: 'Accessibility',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/introduction-to-accessibility-with-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-dynamic-type-with-a-custom-font.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-specify-the-dynamic-type-sizes-a-view-supports.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-the-reduce-motion-accessibility-setting.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-detect-dark-mode.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-decorative-images-to-reduce-screen-reader-clutter.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-reduce-animations-when-requested.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-voiceover-read-characters-individually.md',
          ]
        }, {
          text: 'Tooling',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-make-swiftui-modifiers-safer-to-use-with-warn-unqualified-access.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-at-different-dynamic-type-sizes.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-light-and-dark-mode.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-different-devices.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-a-navigation-view.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-preview-your-layout-in-portrait-or-landscape.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-find-which-data-change-is-causing-a-swiftui-view-to-update.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md',
          ]
        }, {
          text: 'What now?',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/swiftui-tips-and-tricks.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-become-a-swiftui-expert.md',
          ]
        }, {
          text: 'Appendix A',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/understanding-property-wrappers-in-swift-and-swiftui.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/all-swiftui-property-wrappers-explained-and-compared.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-state-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-stateobject-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-published-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-observedobject-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-environmentobject-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-environment-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-binding-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-focusstate-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-gesturestate-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-fetchrequest-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-appstorage-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scenestorage-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-scaledmetric-property-wrapper.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/what-is-the-uiapplicationdelegateadaptor-property-wrapper.md',
          ]
        }, {
          text: 'Appendix B',
          collapsible: true,
          children: [
            '/explore/articles/hackingwithswift.com/swiftui-by-example/common-swiftui-errors-and-how-to-fix-them.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-assign-to-property-self-is-immutable.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-initializer-init-rowcontent-requires-that-sometype-conform-to-identifiable.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-ambiguous-reference-to-member-buildblock.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-function-declares-an-opaque-return-type-but-has-no-return-statements-in-its-body-from-which-to-infer-an-underlying-type.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-property-declares-an-opaque-return-type-but-has-no-initializer-expression-from-which-to-infer-an-underlying-type.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-modifying-state-during-view-update-this-will-cause-undefined-behavior.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-referencing-initializer-initwrappedvalue-on-observedobject-requires-that-sometype-conform-to-observableobject.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-missing-argument-for-parameter-content-in-call.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-images-not-resizing.md',
            '/explore/articles/hackingwithswift.com/swiftui-by-example/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable.md',
          ]
        }
      ]
    }
  ]
});