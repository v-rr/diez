import {Component, property} from '@diez/engine';
import {LoadingDesign, NavigationTitleDesign, palette, ReportDesign, typographs, fontRegistry} from './designs';

class Designs extends Component {
  @property report = new ReportDesign();
  @property loading = new LoadingDesign();
  @property navigationTitle = new NavigationTitleDesign();
}

/**
 * The design system for Poodle Surf.
 */
export class DesignSystem extends Component {
  @property palette = palette;
  @property fontRegistry = fontRegistry;
  @property typographs = typographs;
  @property designs = new Designs();
}
