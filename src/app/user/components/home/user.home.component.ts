@Component({
  selector: 'app-home',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.css']
})
export class UserHomeComponent implements OnInit {
  

  constructor(
    private router: Router
  }

  ngOnInit() {
    console.log('home');
  }


 }