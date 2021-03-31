import api from 'api';

import {IArtigo} from 'interfaces/Artigo.interface';

class ArtigoData {
    show(){
        return api.get<IArtigo[]>(`artigos`);
    }
}

export default new ArtigoData();