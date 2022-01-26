---
hide_table_of_contents: true
---

# OnUserKicked

## Usage

* Called after a player has been kicked from the server
* No return behavior

## Examples

```csharp
void OnUserKicked(IPlayer player, string reason)
{
    Puts($"Player {player.Name} ({player.Id}) was kicked: {reason}");
}
```
