 

class array_string {}
class array_byte {}
class array_int {}
class byte {}
class double {}
class int {}
class f64 {}
class f32 {}
class i64 {}
class i32 {}
class i16 {}
class u64 {}
class u32 {}
class u16 {}
class i8 {}
class u8 {}
class bool {}
class rune {}
class map_string {}
class map_int {}

function init_consts() {
	
}	


 this line will be replaced with definitions
 
function array_repeat(val /* void* */ , nr_repeats /* int */ , elm_size /* int */ ) /* array */ {
 
return  val ;
 
 }
 
array.prototype.repeat2 = function(a /* array */ , nr_repeats /* int */ )/* array */ {
 
 return Array(a[0]).fill(nr_repeats)
 
return  a ;
 
 }
 
array.prototype.sort_with_compare = function(a /* array* */ , compare /* void* */ )/* void */ {
 
 }
 
array.prototype.insert = function(a /* array* */ , i /* int */ , val /* void* */ )/* void */ {
 
 }
 
array.prototype.prepend = function(a /* array* */ , val /* void* */ )/* void */ {
 
 a .insert( 0 , val ) ;
 
 }
 
array.prototype.delete_elm = function(a /* array* */ , idx /* int */ )/* void */ {
 
 }
 
array.prototype.left = function(s /* array */ , n /* int */ )/* array */ {
 
 if ( n >= s .len ) {
 
return  s ;
 
 }
 ;
 
return  s .slice( 0 , n ) ;
 
 }
 
array.prototype.right = function(s /* array */ , n /* int */ )/* array */ {
 
 if ( n >= s .len ) {
 
return  s ;
 
 }
 ;
 
return  s .slice( n , s .len ) ;
 
 }
 
array.prototype.slice = function(s /* array */ , start /* int */ , _end /* int */ )/* array */ {
 
return  s ;
 
 }
 
array.prototype.reverse = function(a /* array */ )/* array */ {
 
return  a ;
 
 }
 
array.prototype.clone = function(a /* array */ )/* array */ {
 
return  a ;
 
 }
 
array.prototype.free = function(a /* array */ )/* void */ {
 
 }
 
array_string.prototype.str = function(a /* array_string */ )/* string */ {
 
 var sb /* typ */ =  strings__new_builder ( a .len * 3 ) ;
 
 sb .write( "[" ) ;
 
 for (
 var i /* typ */ =  0  ;  i < a .len  ;  i ++ ) { 
 
 
 var val /* typ */ =  a [ i] ;
 
 sb .write( "\"" ) ;
 
 sb .write( val ) ;
 
 sb .write( "\"" ) ;
 
 if ( i < a .len - 1 ) {
 
 sb .write( ", " ) ;
 
 }
 ;
 
 }
 ;
 
 sb .write( "]" ) ;
 
return  sb .str( ) ;
 
 }
 
array_byte.prototype.hex = function(b /* array_byte */ )/* string */ {
 
return  "sdf" ;
 
 }
 
array.prototype._push_many = function(arr /* array* */ , val /* void* */ , size /* int */ )/* void */ {
 
 }
 
function v_free( /* void* */ ) /* void */ {
 
 }
 
function todo() /* void */ {
 
 }
 
string.prototype.clone = function(a /* string */ )/* string */ {
 
return  a ;
 
 }
 
string.prototype.replace = function(s /* string */ , rep /* string */ , with_ /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.int = function(s /* string */ )/* int */ {
 
return  0 ;
 
 }
 
string.prototype.i64 = function(s /* string */ )/* i64 */ {
 
return  0 ;
 
 }
 
string.prototype.f32 = function(s /* string */ )/* f32 */ {
 
return  0.0 ;
 
 }
 
string.prototype.f64 = function(s /* string */ )/* f64 */ {
 
return  0.0 ;
 
 }
 
string.prototype.u32 = function(s /* string */ )/* u32 */ {
 
return  ( 0 ) ;
 
 }
 
string.prototype.u64 = function(s /* string */ )/* u64 */ {
 
return  ( 0 ) ;
 
 }
 
string.prototype.split = function(s /* string */ , delim /* string */ )/* array_string */ {
 
return  s .split( delim ) ;
 
 }
 
string.prototype.split_single = function(s /* string */ , delim /* byte */ )/* array_string */ {
 
return  s .split( delim .str( ) ) ;
 
 }
 
string.prototype.split_into_lines = function(s /* string */ )/* array_string */ {
 
return  s .split( "\n" ) ;
 
 }
 
string.prototype.left = function(s /* string */ , n /* int */ )/* string */ {
 
 if ( n >= s .len ) {
 
return  s ;
 
 }
 ;
 
return  s .substr( 0 , n ) ;
 
 }
 
string.prototype.right = function(s /* string */ , n /* int */ )/* string */ {
 
 if ( n >= s .len ) {
 
return  "" ;
 
 }
 ;
 
return  s .substr( n , s .len ) ;
 
 }
 
string.prototype.substr = function(s /* string */ , start /* int */ , end /* int */ )/* string */ {
 
return  "a" ;
 
 }
 
string.prototype.index = function(s /* string */ , p /* string */ )/* int */ {
 
return  - 1 ;
 
 }
 
string.prototype.index_any = function(s /* string */ , chars /* string */ )/* int */ {
 
return  - 1 ;
 
 }
 
string.prototype.last_index = function(s /* string */ , p /* string */ )/* int */ {
 
return  - 1 ;
 
 }
 
string.prototype.index_after = function(s /* string */ , p /* string */ , start /* int */ )/* int */ {
 
return  - 1 ;
 
 }
 
string.prototype.count = function(s /* string */ , substr /* string */ )/* int */ {
 
return  0 ;
 
 }
 
string.prototype.contains = function(s /* string */ , p /* string */ )/* bool */ {
 
return  0 ;
 
 }
 
string.prototype.starts_with = function(s /* string */ , p /* string */ )/* bool */ {
 
return  0 ;
 
 }
 
string.prototype.ends_with = function(s /* string */ , p /* string */ )/* bool */ {
 
return  0 ;
 
 }
 
string.prototype.to_lower = function(s /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.to_upper = function(s /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.capitalize = function(s /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.title = function(s /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.find_between = function(s /* string */ , start /* string */ , end /* string */ )/* string */ {
 
 var start_pos /* typ */ =  s .index( start ) ;
 
 if ( start_pos == - 1 ) {
 
return  "" ;
 
 }
 ;
 
 var val /* typ */ =  s .right( start_pos + start .len ) ;
 
 var end_pos /* typ */ =  val .index( end ) ;
 
 if ( end_pos == - 1 ) {
 
return  val ;
 
 }
 ;
 
return  val .left( end_pos ) ;
 
 }
 
array_string.prototype.contains = function(ar /* array_string */ , val /* string */ )/* bool */ {
 
 var tmp1 =  ar;
 for (var tmp2 = 0; tmp2 < tmp1.length; tmp2++) {
 var s = tmp1 [tmp2];
 
 
 if ( s == val ) {
 
return  1 ;
 
 }
 ;
 
 }
 ;
 
return  0 ;
 
 }
 
array_int.prototype.contains = function(ar /* array_int */ , val /* int */ )/* bool */ {
 
 var tmp3 =  ar;
 for (var i = 0; i < tmp3.length; i++) {
 var s = tmp3 [i];
 
 
 if ( s == val ) {
 
return  1 ;
 
 }
 ;
 
 }
 ;
 
return  0 ;
 
 }
 
function is_space(c /* byte */ ) /* bool */ {
 
return  isspace ( c ) ;
 
 }
 
byte.prototype.is_space = function(c /* byte */ )/* bool */ {
 
return  is_space ( c ) ;
 
 }
 
string.prototype.trim_space = function(s /* string */ )/* string */ {
 
 return s.str.trim(' ');
 
return  "" ;
 
 }
 
string.prototype.trim = function(s /* string */ , cutset /* string */ )/* string */ {
 
 return s.str.trim(cutset);
 
return  "" ;
 
 }
 
string.prototype.trim_left = function(s /* string */ , cutset /* string */ )/* string */ {
 
 return s.str.trimLeft(cutset);
 
return  "" ;
 
 }
 
string.prototype.trim_right = function(s /* string */ , cutset /* string */ )/* string */ {
 
 return s.str.trimRight(cutset);
 
return  "" ;
 
 }
 
array_string.prototype.sort = function(s /* array_string* */ )/* void */ {
 
 }
 
array_string.prototype.sort_ignore_case = function(s /* array_string* */ )/* void */ {
 
 }
 
array_string.prototype.sort_by_len = function(s /* array_string* */ )/* void */ {
 
 }
 
string.prototype.at = function(s /* string */ , idx /* int */ )/* byte */ {
 
 if ( idx < 0  ||  idx >= s .len ) {
 
 v_panic ( "string index out of range" ) ;
 
 }
 ;
 
return  s .str [/*ptr*/ idx ]/*rbyte 0*/ ;
 
 }
 
byte.prototype.is_digit = function(c /* byte */ )/* bool */ {
 
return  c >= '0'  &&  c <= '9' ;
 
 }
 
byte.prototype.is_hex_digit = function(c /* byte */ )/* bool */ {
 
return  c .digit( )  ||  ( c >= 'a'  &&  c <= 'f' )  ||  ( c >= 'A'  &&  c <= 'F' ) ;
 
 }
 
byte.prototype.is_oct_digit = function(c /* byte */ )/* bool */ {
 
return  c >= '0'  &&  c <= '7' ;
 
 }
 
byte.prototype.is_letter = function(c /* byte */ )/* bool */ {
 
return  ( c >= 'a'  &&  c <= 'z' )  ||  ( c >= 'A'  &&  c <= 'Z' ) ;
 
 }
 
string.prototype.free = function(s /* string */ )/* void */ {
 
 }
 
string.prototype.all_before = function(s /* string */ , dot /* string */ )/* string */ {
 
 var pos /* typ */ =  s .index( dot ) ;
 
 if ( pos == - 1 ) {
 
return  s ;
 
 }
 ;
 
return  s .left( pos ) ;
 
 }
 
string.prototype.all_before_last = function(s /* string */ , dot /* string */ )/* string */ {
 
 var pos /* typ */ =  s .index( dot ) ;
 
 if ( pos == - 1 ) {
 
return  s ;
 
 }
 ;
 
return  s .left( pos ) ;
 
 }
 
string.prototype.all_after = function(s /* string */ , dot /* string */ )/* string */ {
 
 var pos /* typ */ =  s .index( dot ) ;
 
 if ( pos == - 1 ) {
 
return  s ;
 
 }
 ;
 
return  s .right( pos + dot .len ) ;
 
 }
 
array_string.prototype.join = function(a /* array_string */ , del /* string */ )/* string */ {
 
return  "" ;
 
 }
 
array_string.prototype.join_lines = function(s /* array_string */ )/* string */ {
 
return  s .join( "\n" ) ;
 
 }
 
string.prototype.reverse = function(s /* string */ )/* string */ {
 
return  s ;
 
 }
 
string.prototype.limit = function(s /* string */ , max /* int */ )/* string */ {
 
 if ( s .len <= max ) {
 
return  s ;
 
 }
 ;
 
return  s .substr( 0 , max ) ;
 
 }
 
byte.prototype.is_white = function(c /* byte */ )/* bool */ {
 
 var i /* typ */ =  ( c ) ;
 
return  i == 10  ||  i == 32  ||  i == 9  ||  i == 13  ||  c == '\r' ;
 
 }
 
string.prototype.hash = function(s /* string */ )/* int */ {
 
 var h /* typ */ =  0 ;
 
 if ( h == 0  &&  s .len > 0 ) {
 
 var tmp4 =  s;
 for (var tmp5 = 0; tmp5 < tmp4 .length; tmp5 ++) {
 var c = tmp4[tmp5];
 
 
 h  =  h * 31 + ( c ) ;
 
 }
 ;
 
 }
 ;
 
return  h ;
 
 }
 
string.prototype.bytes = function(s /* string */ )/* array_byte */ {
 
return [ ] ;
 
 }
 
function v_exit(code /* int */ ) /* void */ {
 
 println ( "js.exit()" ) ;
 
 }
 
function isnil(v /* void* */ ) /* bool */ {
 
return  v == 0 ;
 
 }
 
function v_panic(s /* string */ ) /* void */ {
 
 println ( "V panic: " + s ) ;
 
 v_exit ( 1 ) ;
 
 }
 
function println(s /* string */ ) /* void */ {
 
 console.log(s)
 
 }
 
function eprintln(s /* string */ ) /* void */ {
 
 console.log(s)
 
 }
 
function print(s /* string */ ) /* void */ {
 
 console.log(s)
 
 }
 
double.prototype.str = function(d /* double */ )/* string */ {
 
return  "0" ;
 
 }
 
f64.prototype.str = function(d /* f64 */ )/* string */ {
 
return  "0" ;
 
 }
 
f32.prototype.str = function(d /* f32 */ )/* string */ {
 
return  "0" ;
 
 }
 
function ptr_str(ptr /* void* */ ) /* string */ {
 
return  "0" ;
 
 }
 
f64.prototype.eq = function(a /* f64 */ , b /* f64 */ )/* bool */ {
 
return  ( a - b ) <= 0.01 ;
 
 }
 
int.prototype.str = function(nn /* int */ )/* string */ {
 
return  "0" ;
 
 }
 
u32.prototype.str = function(nn /* u32 */ )/* string */ {
 
return  "0" ;
 
 }
 
u8.prototype.str = function(nn /* u8 */ )/* string */ {
 
return  "0" ;
 
 }
 
i64.prototype.str = function(nn /* i64 */ )/* string */ {
 
return  "0" ;
 
 }
 
u64.prototype.str = function(nn /* u64 */ )/* string */ {
 
return  "0" ;
 
 }
 
bool.prototype.str = function(b /* bool */ )/* string */ {
 
 if ( b ) {
 
return  "true" ;
 
 }
 ;
 
return  "false" ;
 
 }
 
int.prototype.hex = function(n /* int */ )/* string */ {
 
return  "0" ;
 
 }
 
i64.prototype.hex = function(n /* i64 */ )/* string */ {
 
return  "0" ;
 
 }
 
array_byte.prototype.contains = function(a /* array_byte */ , val /* byte */ )/* bool */ {
 
 var tmp1 =  a;
 for (var tmp2 = 0; tmp2 < tmp1.length; tmp2++) {
 var aa = tmp1 [tmp2];
 
 
 if ( aa == val ) {
 
return  1 ;
 
 }
 ;
 
 }
 ;
 
return  0 ;
 
 }
 
rune.prototype.str = function(c /* rune */ )/* string */ {
 
return  "0" ;
 
 }
 
byte.prototype.str = function(c /* byte */ )/* string */ {
 
return  "0" ;
 
 }
 
byte.prototype.is_capital = function(c /* byte */ )/* bool */ {
 
return  c >= 'A'  &&  c <= 'Z' ;
 
 }
 
array_byte.prototype.clone = function(b /* array_byte */ )/* array_byte */ {
 
 var res /* typ */ = [ ( 0 ) ] .repeat2( b .len ) ;
 
 for (
 var i /* typ */ =  0  ;  i < b .len  ;  i ++ ) { 
 
 
 res [ i ] =  b [ i] ;
 
 }
 ;
 
return  res ;
 
 }
 
function utf8_char_len(b /* byte */ ) /* int */ {
 
return  ( ( 0xe5000000  >>  ( ( b  >>  3 ) & 0x1e ) ) & 3 ) + 1 ;
 
 }
 
function utf32_to_str(code /* u32 */ ) /* string */ {
 
return  "" ;
 
 }
 
function utf32_to_str_no_malloc(code /* u32 */ , buf /* void* */ ) /* string */ {
 
return  "" ;
 
 }
 
string.prototype.utf32_code = function(_rune /* string */ )/* int */ {
 
return  0 ;
 
 }
 
map.prototype._set = function(m /* map* */ , key /* string */ , val /* void* */ )/* void */ {
 
 }
 
map.prototype.keys = function(m /* map* */ )/* array_string */ {
 
return [ "" ] ;
 
 }
 
map.prototype.get = function(m /* map */ , key /* string */ , out /* void* */ )/* bool */ {
 
return  0 ;
 
 }
 
map.prototype.delete = function(m /* map* */ , key /* string */ )/* void */ {
 
 }
 
map.prototype._exists = function(m /* map */ , key /* string */ )/* bool */ {
 
return  0 ;
 
 }
 
map.prototype.print = function(m /* map */ )/* void */ {
 
 println ( "<<<<<<<<" ) ;
 
 println ( ">>>>>>>>>>" ) ;
 
 }
 
map.prototype.free = function(m /* map */ )/* void */ {
 
 }
 
map_string.prototype.str = function(m /* map_string */ )/* string */ {
 
 var sb /* typ */ =  strings__new_builder ( 50 ) ;
 
 sb .writeln( "{" ) ;
 
 var tmp1 =  m;
 for (var key in tmp1) {
 var val = tmp1[key];
 
 
 }
 ;
 
 sb .writeln( "}" ) ;
 
return  sb .str( ) ;
 
 }
 
function opt_ok(data /* void* */ , size /* int */ ) /* Option */ {
 
 if ( size >= 255 ) {
 
 v_panic ( "option size too big" ) ;
 
 }
 ;
 
 var res /* typ */ =  { ok :  1 , data :  {} , error :  "" , } ;
 
 memcpy ( res .data ,  data ,  size ) ;
 
return  res ;
 
 }
 
function v_error(s /* string */ ) /* Option */ {
 
return  { error :  s , data :  {} , ok :  0 } ;
 
 }
 
function gl__new_shader(name /* string */ ) /* gl__Shader */ {
 
 var dir /* typ */ =  "" ;
 
 if ( name .with( "/" ) ) {
 
 dir  =  "" ;
 
 }
 ;
 
