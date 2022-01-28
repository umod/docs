---
hide_table_of_contents: true
---

# OnRfBroadcasterAdded

## Usage

* Called right after an object has started broadcasting an RF frequency
* No return behavior

## Examples

```csharp title=""
void OnRfBroadcasterAdded(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterAdded works!");
}
```
