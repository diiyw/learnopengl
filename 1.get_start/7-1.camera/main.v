import (
    gl
    glfw
    time
    math
    stbi
    glm
)

fn main() {

    glfw.init()

    win_cfg := glfw.WinCfg{
          width:800,
          height:600,
          title:'coordination',
    }

    window := glfw.create_window(win_cfg)

    window.make_context_current()

    gl.init_glad()

    gl.viewport(0,0,800,600)

    gl.enable(C.GL_DEPTH_TEST)

    shader := gl.new_shader('main')

    vertices := [
         -0.5, -0.5, -0.5,  0.0, 0.0,
         0.5, -0.5, -0.5,  1.0, 0.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         -0.5,  0.5, -0.5,  0.0, 1.0,
         -0.5, -0.5, -0.5,  0.0, 0.0,

         -0.5, -0.5,  0.5,  0.0, 0.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 1.0,
         0.5,  0.5,  0.5,  1.0, 1.0,
         -0.5,  0.5,  0.5,  0.0, 1.0,
         -0.5, -0.5,  0.5,  0.0, 0.0,

         -0.5,  0.5,  0.5,  1.0, 0.0,
         -0.5,  0.5, -0.5,  1.0, 1.0,
         -0.5, -0.5, -0.5,  0.0, 1.0,
         -0.5, -0.5, -0.5,  0.0, 1.0,
         -0.5, -0.5,  0.5,  0.0, 0.0,
         -0.5,  0.5,  0.5,  1.0, 0.0,

         0.5,  0.5,  0.5,  1.0, 0.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5,  0.5,  0.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 0.0,

         -0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5, -0.5,  1.0, 1.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
         -0.5, -0.5,  0.5,  0.0, 0.0,
         -0.5, -0.5, -0.5,  0.0, 1.0,

         -0.5,  0.5, -0.5,  0.0, 1.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5,  0.5,  0.5,  1.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 0.0,
         -0.5,  0.5,  0.5,  0.0, 0.0,
         -0.5,  0.5, -0.5,  0.0, 1.0
    ]

    indices := [
        0, 1, 3, // first triangle
        1, 2, 3  // second triangle
    ]

    cube_positions := [
      glm.vec3( 0.0,  0.0,  0.0),
      glm.vec3( 2.0,  5.0, -15.0),
      glm.vec3(-1.5, -2.2, -2.5),
      glm.vec3(-3.8, -2.0, -12.3),
      glm.vec3( 2.4, -0.4, -3.5),
      glm.vec3(-1.7,  3.0, -7.5),
      glm.vec3( 1.3, -2.0, -2.5),
      glm.vec3( 1.5,  2.0, -2.5),
      glm.vec3( 1.5,  0.2, -1.5),
      glm.vec3(-1.3,  1.0, -1.5)
    ]

    vbo := gl.gen_buffer()
    ebo := gl.gen_buffer()
    vao := gl.gen_vertex_array()

    gl.bind_vao(vao)

    gl.bind_buffer(C.GL_ARRAY_BUFFER,vbo)
    gl.buffer_data_f32(C.GL_ARRAY_BUFFER,vertices,C.GL_STATIC_DRAW)

    gl.bind_buffer(C.GL_ELEMENT_ARRAY_BUFFER,ebo)
    gl.buffer_data_int(C.GL_ELEMENT_ARRAY_BUFFER,indices,C.GL_STATIC_DRAW)

    stbi.set_flip_vertically_on_load(true)

    // position attribute
    gl.vertex_attrib_pointer(0,3,C.GL_FLOAT,false,5,0)
    gl.enable_vertex_attrib_array(0)
    // texture coord attribute
    gl.vertex_attrib_pointer(1,2,C.GL_FLOAT,false,5,3)
    gl.enable_vertex_attrib_array(1)

    // texture 1
    texture := gl.gen_texture()
    gl.bind_2d_texture(texture)
    // set the texture wrapping parameters
    gl.tex_param(C.GL_TEXTURE_WRAP_S,C.GL_REPEAT)
    gl.tex_param(C.GL_TEXTURE_WRAP_T,C.GL_REPEAT)
    // set texture filtering parameters
    gl.tex_param(C.GL_TEXTURE_MIN_FILTER,C.GL_LINEAR)
    gl.tex_param(C.GL_TEXTURE_MAG_FILTER,C.GL_LINEAR)

    image := stbi.load('container.jpg')
    image.tex_image_2d()
    gl.generate_mipmap(C.GL_TEXTURE_2D)
    image.free()

    // texture 2
    texture2 := gl.gen_texture()
    gl.bind_2d_texture(texture2)
    // set the texture wrapping parameters
    gl.tex_param(C.GL_TEXTURE_WRAP_S,C.GL_REPEAT)
    gl.tex_param(C.GL_TEXTURE_WRAP_T,C.GL_REPEAT)
    // set texture filtering parameters
    gl.tex_param(C.GL_TEXTURE_MIN_FILTER,C.GL_LINEAR)
    gl.tex_param(C.GL_TEXTURE_MAG_FILTER,C.GL_LINEAR)

    image2 := stbi.load('awesomeface.png')
    image2.tex_image_2d()
    gl.generate_mipmap(C.GL_TEXTURE_2D)
    image2.free()

    // tell opengl for each sampler to which texture unit it belongs to (only has to be done once)
    // -------------------------------------------------------------------------------------------
    shader.use() // don't forget to activate/use the shader before setting uniforms!
    shader.set_int('texture1',0)
    shader.set_int('texture2',1)

    camera_speed := 0.05

        mut camera_pos   := glm.vec3(0.0, 0.0,  3.0)
        mut camera_front := glm.vec3(0.0, 0.0, -1.0)
        mut camera_up    := glm.vec3(0.0, 1.0,  0.0)

    for !window.should_close() {

        gl.clear_color(255, 255, 255,1)
        gl.clear()

        // bind Texture
        gl.active_texture(C.GL_TEXTURE0)
        gl.bind_2d_texture(texture)

        gl.active_texture(C.GL_TEXTURE1)
        gl.bind_2d_texture(texture2)

        // create transformations
        mut view := glm.identity()
        mut projection := glm.identity()

        // key press
        if window.key_pressed(C.GLFW_KEY_W) {
            camera_pos = camera_pos.add(camera_front.mult_scalar(camera_speed))
        }
            if window.key_pressed(C.GLFW_KEY_S) {
                camera_pos = camera_pos.sub(camera_front.mult_scalar(camera_speed))
            }

                if window.key_pressed(C.GLFW_KEY_A) {
                  camera_pos = camera_pos.sub(camera_front.cross(camera_up).normalize().mult_scalar(camera_speed))
              }
                 if window.key_pressed(C.GLFW_KEY_D) {
                    camera_pos = camera_pos.add(camera_front.cross(camera_up).normalize().mult_scalar(camera_speed))
                }

        view = glm.look_at(camera_pos,camera_pos.add(camera_front), camera_up)

        projection = glm.perspective(45, 800.0/600.0, 0.1, 100.0)

        // render container
        shader.use()

        shader.set_mat4('view',view)
        shader.set_mat4('projection',projection)

        gl.bind_vao(vao)

        for i := 0; i < 10; i++ {
          mut model := glm.identity()
          model = glm.translate(model, cube_positions[i])
          angle := 20.0 * f32(i)
          model = glm.rotate(model,angle, glm.vec3(1.0, 0.3, 0.5))
          shader.set_mat4('model',model)

          gl.draw_arrays(C.GL_TRIANGLES,0,36)
        }

        window.swap_buffers()
        glfw.poll_events()

        time.sleep_ms(10)
    }
}