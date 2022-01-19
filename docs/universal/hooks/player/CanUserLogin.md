---
hide_table_of_contents: true
---

# CanUserLogin

## Usage

* Called when a player is attempting to connect to the server
* Return a string to kick the player with specified reason
* Return false to kick the player without a reason

## Examples

```csharp
object CanUserLogin(string playerName, string playerId, string playerIp)
{
    if (playerName.Contains("admin", StringComparison.OrdinalIgnoreCase))
    {
        Puts($"{playerName} ({playerId}) at {playerIp} tried to connect with 'admin' in name");
        return "Sorry, your name cannot have 'admin' in it";
    }
    
    return null;
}
```
