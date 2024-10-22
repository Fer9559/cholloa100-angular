import { User } from "./user.interface";

export interface ListChollos {
  id_chollo:   string;
  titulo:      string;
  precio:      string;
  enlace:      string;
  descripcion: string;
  createdAt:   Date;
  updatedAt:   Date;
  images:      string[];
  user:        User;
}


