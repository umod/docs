---
hide_table_of_contents: true
---

# OnUserChat

## Usage

* Called when a player sends a chat message to the server
* Returning true overrides default behavior of chat, not commands

## Examples

```csharp title=""
object OnUserChat(IPlayer player, string message)
{
    Puts($"{player.Name} said: {message}");
    return null;
}
```
