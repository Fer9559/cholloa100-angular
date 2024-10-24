import { User } from "./user.interface";

export interface UpdateChollo {
  id_chollo:   string;
  titulo:      string;
  precio:      string;
  enlace:      string;
  descripcion: string;
  createdAt:   Date;
  updatedAt:   Date;
  user:        User;
  images:      string[];
}

