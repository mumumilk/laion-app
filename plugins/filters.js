import Vue from 'vue';
import { format, formatDistance } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

Vue.filter('distance', (val) =>
  formatDistance(new Date(val), new Date(), { locale: ptBr })
);

Vue.filter('format', (val) => format(new Date(val), 'dd/MM/yyyy HH:mm'));
