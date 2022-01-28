---
hide_table_of_contents: true
---

# OnCrateDropped

## Usage

* Called when a locked crate from the CH47 (Chinook) has dropped
* No return behavior

## Examples

```csharp title=""
void OnCrateDropped(HackableLockedCrate crate)
{
    Puts("OnCrateDropped works!");
}
```
