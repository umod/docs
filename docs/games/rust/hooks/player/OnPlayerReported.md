---
hide_table_of_contents: true
---

# OnPlayerKicked

## Usage

* Called when a player has reported someone via F7
* No Return behavior

## Examples

```csharp title=""
void OnPlayerReported(BasePlayer reporter, string targetName, string targetId, string subject, string message, string type)
{
    Puts($"{reporter.displayName} reported {targetName} for {subject}.");
}
```
