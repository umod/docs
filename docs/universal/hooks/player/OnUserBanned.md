---
hide_table_of_contents: true
---

# OnUserBanned

## Usage

* Called after a player has been banned from the server
* No return behavior

## Examples

```csharp
void OnUserBanned(string playerName, string playerId, string playerIp, string reason)
{
    Puts($"Player {playerName} ({playerId}) at {playerIp} was banned: {reason}");
}
```
