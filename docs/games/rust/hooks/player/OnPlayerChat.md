---
hide_table_of_contents: true
---

# OnPhoneDial

## Usage

* Called when the player sends chat to the server
* Return a non-null value to override default behavior of chat, not commands

## Examples

```csharp title=""
object OnPlayerChat(BasePlayer player, string message, Chat.ChatChannel channel)
{
    Puts("OnPlayerChat works!");
    return null;
}
```
