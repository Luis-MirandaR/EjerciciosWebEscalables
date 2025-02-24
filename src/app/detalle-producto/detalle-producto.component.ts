import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../interfaces/Product';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})

export class DetalleProductoComponent{
    @Input() producto!: Producto;
}
