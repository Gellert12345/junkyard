extends Node2D


#játék i ndulasakor
func _ready() -> void:
	$Label.text = "Hello word"
	$Label.modulate = Color.GREEN

func _input(event):
	if event.is_action_pressed("my_action"):
		$Label.modulate = Color.RED