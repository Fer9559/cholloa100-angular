import { User } from "./user.interface";



export interface CreateChollo {
  titulo:      string;
  precio:      number;
  enlace:      string;
  descripcion: string;
  images:      string[];
  user:        User;
  id_chollo:   string;
  createdAt:   Date;
  updatedAt:   Date;
}


